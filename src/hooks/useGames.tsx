import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { DataResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  rating: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

interface GameData {
  pages: DataResponse<Game>[];
  setGames?: () => void;
  gameError: Error;
  setGameError?: () => void;
  gameIsLoading: boolean;
  pageIsLoading: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => unknown;
}

export default function useGame(gameQuery: GameQuery) {
  const dataQuery = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          search: gameQuery.searchText,
          ordering: gameQuery.sortOrder,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage ? allPages.length + 1 : undefined;
    },
    queryKey: ["games", gameQuery],
    staleTime: 60 * 1000,
  });

  const response: GameData = {
    pages: dataQuery.data?.pages ?? [],
    gameError: (dataQuery.error as Error) ?? "",
    gameIsLoading: dataQuery.isLoading,
    pageIsLoading: dataQuery.isFetchingNextPage,
    hasNextPage: dataQuery.hasNextPage ?? false,
    fetchNextPage: dataQuery.fetchNextPage,
  };
  return response;
}
