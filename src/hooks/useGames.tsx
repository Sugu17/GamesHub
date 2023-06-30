import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
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
  rating_top: number;
}

interface GameResponse {
  games: Game[];
  setGames?: () => void;
  gameError: string;
  setGameError?: () => void;
  gameIsLoading: boolean;
}

interface DataResponse<T> {
  count: number;
  results: T[];
}

export default function useGame(gameQuery: GameQuery) {
  const dataQuery = useQuery({
    queryFn: () =>
      apiClient
        .get<DataResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre,
            platforms: gameQuery.platform,
            search: gameQuery.searchText,
            ordering: gameQuery.sortOrder,
          },
        })
        .then((response) => response.data),
    queryKey: ["games"],
    staleTime: 60 * 1000,
  });

  const response: GameResponse = {
    games: dataQuery.data?.results ?? [],
    gameError: dataQuery.error as string,
    gameIsLoading: dataQuery.isLoading,
  };
  return response;
}
