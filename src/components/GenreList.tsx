import { ListItem, UnorderedList } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";

export default function GenreList() {
  const genreHookObj = useGenre();
  const { genres, setGenres } = genreHookObj;
  return (
    <UnorderedList listStyleType={"none"}>
      {genres.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </UnorderedList>
  );
}
