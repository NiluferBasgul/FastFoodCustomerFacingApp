import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import useSWR, { SWRConfiguration } from "swr"
import axiosInstance from "./axiosInstance"

export const useSWRAxios = <Data extends {}>(
    request: AxiosRequestConfig,
    config?: SWRConfiguration,
) => {
    const requestModified: AxiosRequestConfig = {
        ...request,
        method: `GET`,
    }

    const configModified: SWRConfiguration = {
        ...config,
        // global customizations
    }
    /**
     * Axios has a wrapper object around data => filter response
     */
    const { data: response, ...responseUseSWR } = useSWR<
        AxiosResponse<Data>,
        AxiosError
    >(
        JSON.stringify(requestModified),
        async () => axiosInstance(requestModified),
        configModified,
    )
    const { data, ...responseAxios } = response || {}
    return { ...responseUseSWR, responseAxios, data }
}