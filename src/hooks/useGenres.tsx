import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface GenreHook {
  genres: Genre[];
  setGenres?: () => void;
  genreError: string;
  setGenreError?: () => void;
  genreIsLoading: boolean;
}

export default function useGenre() {
  const dataHookObj = useData<Genre>("/genres");
  const response: GenreHook = {
    genres: dataHookObj.data,
    genreError: dataHookObj.error,
    genreIsLoading: dataHookObj.isLoading,
  };
  return response;
}
