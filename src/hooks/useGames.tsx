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
  gameError: Error;
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
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            search: gameQuery.searchText,
            ordering: gameQuery.sortOrder,
          },
        })
        .then((response) => response.data)
        .catch((error) => error),
    queryKey: ["games", gameQuery],
    staleTime: 60 * 1000,
  });

  const response: GameResponse = {
    games: dataQuery.data?.results ?? [],
    gameError: (dataQuery.error as Error) ?? "",
    gameIsLoading: dataQuery.isLoading,
  };
  return response;
}
