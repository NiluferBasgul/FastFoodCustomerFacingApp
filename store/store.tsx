import axios, { AxiosInstance } from "axios";
import { apiUrl } from "config/storeConfig";
import cucinaTree, { BaseCustomizations, CustomizableMenuItem, getInitialCustomizations, initialPizzaCustomizations, MenuCategoryType, Orders, OrderType, PizzaCustomizations, PricedCrustType, SupportedLanguages } from "data/cucinaTree";
import React, { useReducer } from "react";
import { ContextDevTool } from 'react-context-devtool';
import { toast } from "react-toastify";
import { isBrowser } from "../utils/genericUtils";


export interface AppState {
  orders: Orders | {}
  // TODO: Think about calculating the total on the fly
  total: number;
  selectedDeliveryHour: string;
  selected: CustomizableMenuItem | null;
  // pizzaByDesign: 
  orderType: OrderType;
}

export interface LanguageSelection {
  value: SupportedLanguages,
  label: JSX.Element
}

export interface ContextProps {
  state: AppState;
  dispatch: (any: any) => void;
  axiosInstance: AxiosInstance;
}

// const initialMenuItem: MenuItem = {
//   name: null,
//   price: null,
//   menuCategory: null,
//   standartIngredients: {},
//   slug: null!
// }

// const customizedInitialMenuItem: CustomizableMenuItem<MenuCategoryType.PIZZAS> = {
//   ...initialMenuItem,
//   customizations: initialPizzaCustomizations,
//   count: 0
// }

const initialState: AppState = {
  orders: isBrowser ? JSON.parse(sessionStorage.getItem(`@orders`) || `{}`) : {},
  total: isBrowser ? +JSON.parse(sessionStorage.getItem(`@total`) || `0`) : 0,
  selected: {
    customizations: { ...initialPizzaCustomizations }
  },
  selectedDeliveryHour: 'ASAP',
  orderType: OrderType.DELIVERY,
};

const reducer = (state: AppState, action) => {

  switch (action.type) {
    case "RESET": {
      if (typeof window !== 'undefined') sessionStorage.clear();

      return {
        ...initialState,
      };
    }

    case "INITIAL": {
      return {
        ...state,
      };
    }

    case "RESET_SELECTED": {
      return {
        ...state,
        selected: { ...initialState.selected }
      }
    }

    case "CHANGE_ORDER_TYPE": {
      return {
        ...state,
        orderType: action.payload
      }
    }

    case "SELECT_PRODUCT": {
      const item: CustomizableMenuItem = { ...action.payload };
      const slug = item.slug;
      const menuCategory = item.menuCategory;

      const dataTreeItem = cucinaTree.mainMenu[menuCategory!][slug!];
      const merged = { ...dataTreeItem, ...item }

      return {
        ...state,
        selected: {
          ...merged
        }
      };
    }

    case "EDIT_PRODUCT": {
      const order = { [state?.selected?.id!]: { ...state.selected } };
      const orders = { ...state.orders, ...order }

      return {
        ...state,
        orders
      }
    }

    case "SELECT_EXTRA_SAUCE": {
      let sauces = { ...state.selected?.customizations?.extraSauce };
      const sauce = { ...action.payload };
      const sauceName = Object.keys(sauce)[0];
      const rest = sauce[sauceName]

      if (!sauces[sauceName]) {
        sauces[sauceName] = rest
      } else {
        delete sauces[sauceName];
      }

      const customizations: PizzaCustomizations | BaseCustomizations = { ...state.selected?.customizations!, extraSauce: sauce }

      return {
        ...state,
        selected: {
          ...state.selected,
          customizations
        }
      }
    }

    case "UPDATE_CRUST_TYPE": {
      const menuCategoryType = MenuCategoryType.PIZZAS
      const type = action.payload

      const crustType: PricedCrustType = {
        [type]: {
          ...getInitialCustomizations(menuCategoryType).crustType[type]
        }
      }

      const customizations = {
        ...state.selected?.customizations,
        crustType: crustType
      }

      return {
        ...state,
        selected: {
          ...state.selected,
          customizations: {
            ...customizations
          }
        }
      }
    }

    case "CHANGE_PRODUCT_SIZE": {
      const size = action.payload;

      const customizations = {
        ...state.selected?.customizations,
        size: [size]
      }

      return {
        ...state,
        selected: {
          ...state.selected,
          customizations: {
            ...customizations
          }
        }
      }
    }

    case "UPDATE_EXTRA_INGREDIENTS": {
      const extraIngredients = { ...state.selected?.customizations?.extraIngredients };
      const [ingredient, details] = Object.entries(action.payload)[0];

      if (!extraIngredients[ingredient]) {
        extraIngredients[ingredient] = { ...details as any }

      }
      else {
        delete extraIngredients[ingredient];
      }

      return {
        ...state,
        selected: {
          ...state.selected,
          customizations: {
            ...state.selected?.customizations,
            extraIngredients
          }
        }
      }
    }

    case "UPDATE_CRUST_ADDITIONS": {
      const [crust, details] = Object.entries(action.payload)[0];
      const crustAdditions = { ...state.selected?.customizations?.crustAdditions! }

      if (!crustAdditions[crust]) {
        crustAdditions[crust] = details
      }
      else {
        delete crustAdditions[crust];
      }

      return {
        ...state,
        selected: {
          ...state.selected,
          customizations: {
            ...state.selected?.customizations,
            crustAdditions
          }
        }
      }
    }

    case "UPDATE_DISABLED_INGREDIENTS": {
      const ingredient = action.payload
      const disabledIngredients = { ...state.selected?.customizations?.disabledIngredients }

      if (!disabledIngredients[ingredient.name]) {
        disabledIngredients[ingredient.name] = ingredient.name
      }
      else {
        delete disabledIngredients[ingredient.name];
      }

      return {
        ...state,
        selected: {
          ...state.selected,
          customizations: {
            ...state.selected?.customizations,
            disabledIngredients
          }
        }
      }
    }

    case "CLEAR_SELECTED_PRODUCT": {
      return {
        ...state,
        selected: null,
      };
    }

    case "ADD_PRODUCT": {
      const order = addOrder(state.orders, action.payload)

      return {
        ...state,
        total: state.total + action.payload[Object.keys(action.payload)[0]].total,
        orders: { ...state.orders, ...order },
      };
    }

    case "REMOVE_PRODUCT": {
      const orders = removeKey(action.payload.id, state.orders);

      return {
        ...state,
        total: state.total - action.payload.total * action.payload.count,
        orders,
      };
    }

    case "CHANGE_PRODUCT_TOTAL": {
      const id = action.payload.order.id;

      const product = {
        ...state.orders[id],
        count:
          action.payload.direction === 1
            ? state.orders[id].count + 1
            : state.orders[id].count - 1,
      };

      const orders = {
        ...state.orders,
        [id]: { ...product }
      }

      const total =
        action.payload.direction === 1
          ? state.total + product.total
          : state.total - product.total;

      return {
        ...state,
        orders,
        total,
      };
    }

    case "SET_SELECTED_DELIVERY_HOUR": {
      return {
        ...state,
        selectedDeliveryHour: action.payload
      }
    }

    default:
      return state;
  }
};

const addOrder = ({ ...orders }, { ...order }: CustomizableMenuItem) => {
  if (Object.keys(orders!).length < 1) {
    return order;
  }

  let mergedOrder = {}

  for (const [id, item] of Object.entries(orders)) {
    const destructed = Object.values(order)[0] as any

    if (item.slug === destructed.slug && item.price === destructed.price) {
      // if (destructed.customizations && JSON.stringify(destructed.customizations) !== JSON.stringify(item.customizations)) {
      if (destructed.customizations) {
        // Don't allow customizable elements merging.
        // It makes problem for editing mode because count can 
        // be more than 1
        continue;
      }

      mergedOrder = {
        [id]: {
          ...item,
          count: item.count + destructed.count
        }
      }
      break;
    }
  };

  return Object.entries(mergedOrder).length > 0 ? mergedOrder : order;
}

const removeKey = (key, { [key]: _, ...rest }) => rest;

const Context = React.createContext<Partial<ContextProps>>({});

const Provider = ({ children }) => {
  //@ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  const axiosInstance = axios.create({
    baseURL: apiUrl
  });

  axiosInstance.interceptors.request.use(
    // async config => {
    //     const user = await Utils.getUserFromLocalStorage();
    //     if (
    //         user &&
    //         JSON.parse(user) &&
    //         JSON.parse(user).accessToken &&
    //         !config.url.includes("auth")
    //     ) {
    //         config.headers.Authorization = `Bearer ${JSON.parse(user).accessToken}`;
    //     }
    //     return config;
    // },
    // error => {
    //     return Promise.reject(error);
    // }
  );

  axiosInstance.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      try {
        const errors = error?.response?.data?.errors;

        if (errors && errors.length > 0 && (typeof errors[0] === 'string' || errors[0] instanceof String)) {
          errors.map(error => toast.error(error));
        }
        else {
          throw Error();
        }

      } catch (err) {
        toast.error('Something went wrong')
      }
      // dispatch({ type: 'SHOW_ERROR_TOASTR', payload: error })
      return Promise.reject(error);
    }
  );

  const context = {
    state: state!,
    dispatch: dispatch!,
    axiosInstance
  }

  return (
    <Context.Provider
      value={context}
    >
      <ContextDevTool context={Context} id="uniqContextId" displayName="Order Cucina Main Context" />
      {children}
    </Context.Provider>
  );
};

export { Provider, Context };
