import axios, { AxiosError, AxiosResponse } from "axios";
import { apiUrl } from "config/storeConfig";

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
    async (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        console.error(error);
        // if (
        //     error?.response?.status >= 401 &&
        //     !error?.response?.config?.url.includes("auth")
        // ) {
        //     // Utils.removeUserFromLocalStorage();
        //     // navigationService.navigate("AuthScreen", {});
        // }

        
        return Promise.reject(error);
    }
);

export default axiosInstance;
