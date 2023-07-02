import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export default function useGenre() {
  const genreQuery = useQuery({
    queryFn: (): Promise<Genre[]> =>
      new Promise((resolve) => {
        resolve(
          genres.map((data) => ({
            id: data.id,
            name: data.name,
            slug: data.slug,
            image_background: data.image_background,
          }))
        );
      }),
    queryKey: ["genres"],
    staleTime: 24 * 60 * 60 * 1000,
  });
  return genreQuery;
}
