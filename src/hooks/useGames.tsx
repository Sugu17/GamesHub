import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { DataResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "./useStore";

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

export default function useGame() {
  const gameQuery = useGameQueryStore((select) => select.gameQuery);
  const gameKey = {
    genres: gameQuery.genre?.id,
    platforms: gameQuery.platform?.id,
    search: gameQuery.searchText,
    ordering: gameQuery.sortOrder,
  };
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
    queryKey: ["games", gameKey],
    staleTime: 60 * 60 * 1000,
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
