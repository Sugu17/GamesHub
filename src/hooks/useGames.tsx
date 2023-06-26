import { GameQuery } from "../App";
import useData from "./useData";

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

interface GameHook {
  games: Game[];
  setGames?: () => void;
  gameError: string;
  setGameError?: () => void;
  gameIsLoading: boolean;
}

export default function useGame(gameQuery: GameQuery) {
  const dataHookObj = useData<Game>("/games", gameQuery, {
    params: {
      genres: gameQuery.genre,
      platforms: gameQuery.platform,
      search: gameQuery.searchText,
      ordering: gameQuery.sortOrder,
    },
  });
  const response: GameHook = {
    games: dataHookObj.data,
    gameError: dataHookObj.error,
    gameIsLoading: dataHookObj.isLoading,
  };
  return response;
}
