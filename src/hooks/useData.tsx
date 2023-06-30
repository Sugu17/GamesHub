import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { GameQuery } from "../App";

export default function useData<T>(
  dataEndpoint: string,
  deps?: GameQuery,
  requestConfig?: AxiosRequestConfig
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<DataResponse<T>>(dataEndpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((response) => setData(response.data.results))
      .then(() => setLoading(false))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    // Cleanup
    return () => controller.abort();
  }, [deps]);

  return {
    data,
    error,
    isLoading,
  };
}
