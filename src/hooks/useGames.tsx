import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  rating: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface GamesResponse {
  gameCount: number;
  results: Game[];
}

export default function useGame() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Effect callback called!");
    console.log("Loading...");
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
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
    games: games,
    setGames: setGames,
    error: error,
    setError: setError,
    isLoading: isLoading,
  };
}
