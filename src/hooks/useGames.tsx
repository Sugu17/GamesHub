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

export default function useGame(
  selectedGenre?: number | null,
  selectedPlatform?: number | null,
  searchInputText?: string | null
) {
  const dataHookObj = useData<Game>(
    "/games",
    [selectedGenre, selectedPlatform, searchInputText],
    {
      params: {
        genres: selectedGenre,
        platforms: selectedPlatform,
        search: searchInputText,
      },
    }
  );
  const response: GameHook = {
    games: dataHookObj.data,
    gameError: dataHookObj.error,
    gameIsLoading: dataHookObj.isLoading,
  };
  return response;
}
