import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface GenresResponse {
  count: number;
  results: Genre[];
}

export default function useGenre() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Effect callback called!");
    console.log("Loading...");
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GenresResponse>("/genres", { signal: controller.signal })
      .then((response) => setGenres(response.data.results))
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
    genres: genres,
    setGenres: setGenres,
    error: error,
    setError: setError,
    isLoading: isLoading,
  };
}
