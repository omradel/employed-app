import axiosInstance from "@/lib/axios";
import {
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
  type Method,
} from "axios";

interface UseFetchOptions<T> {
  method?: Method;
  body?: unknown;
  params?: Record<string, unknown>;
  immediate?: boolean;
  watch?: unknown[];
  transform?: (response: AxiosResponse) => T;
}

export interface useFetchResponse<T> {
  data: Ref<T | null>;
  response: Ref<AxiosResponse<T> | null>;
  loading: Ref<boolean>;
  error: Ref<AxiosError<T> | null>;
  statusCode: Ref<number | null>;
  refresh: () => Promise<{
    data: T | null;
    response: AxiosResponse<T> | null;
    loading: boolean;
    error: AxiosError<T> | null;
    statusCode: number | null;
  }>;
  execute: () => Promise<{
    data: T | null;
    response: AxiosResponse<T> | null;
    loading: boolean;
    error: AxiosError<T> | null;
    statusCode: number | null;
  }>;
}

export const useFetch = <T>(url: string, options: UseFetchOptions<T>) => {
  const {
    method = "GET",
    body,
    params,
    transform,
    immediate = true,
    watch: watchValues = [],
  } = options;

  const data = ref<T | null>(null);
  const response = ref<AxiosResponse<T> | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<AxiosError<T> | null>(null);
  const statusCode = ref<number | null>(null);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;
    statusCode.value = null;

    try {
      const res = await axiosInstance.request<T>({
        url,
        method,
        data: body,
        params,
      });

      response.value = res;
      statusCode.value = res?.status ?? null;
      data.value = transform ? transform(res) : res.data;
    } catch (err) {
      const axiosError = err as AxiosError<T>;
      error.value = axiosError;
      statusCode.value = axiosError.response?.status ?? null;
    } finally {
      loading.value = false;
    }

    return {
      data: data.value,
      response: response.value,
      loading: loading.value,
      error: error.value,
      statusCode: statusCode.value,
    };
  };

  if (watchValues.length > 0) {
    watch(watchValues, fetchData, { immediate });
  } else if (immediate) {
    fetchData();
  }

  return {
    data,
    response,
    loading,
    error,
    statusCode,
    refresh: fetchData,
    execute: fetchData,
  };
};
