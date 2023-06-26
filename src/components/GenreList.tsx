import {
  ListItem,
  List,
  HStack,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";

import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreList(props: Props) {
  const genreHookObj = useGenre();
  const { genres, genreIsLoading, genreError } = genreHookObj;
  if (genreError) console.log("Error in fetching genres!!!");
  return (
    <>
      {genreIsLoading && <GenreSkeleton />}
      <Heading fontSize={"2xl"} marginBottom={2}>
        Genres
      </Heading>
      <List listStyleType={"none"}>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={3}>
            <HStack spacing={2}>
              <Image
                boxSize={10}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                onClick={() => props.onSelectGenre(genre)}
                variant={
                  props.selectedGenre?.id === genre.id ? "solid" : "ghost"
                }
                fontSize={"lg"}
                fontWeight={
                  props.selectedGenre?.id === genre.id ? "bold" : "normal"
                }
                paddingX={2}
              >
                {genre.name.length > 10
                  ? genre.name.slice(0, 7) + "..."
                  : genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
