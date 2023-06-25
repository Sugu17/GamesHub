import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface DataResponse<T> {
  count: number;
  results: T[];
}

export default function useData<T>(dataEndpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Effect callback called!");
    console.log("Loading...");
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<DataResponse<T>>(dataEndpoint, { signal: controller.signal })
      .then((response) => setData(response.data.results))
      .then(() => setLoading(false))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    // Cleanup
    return () => controller.abort();
  }, []);

  return {
    data,
    error,
    isLoading,
  };
}
