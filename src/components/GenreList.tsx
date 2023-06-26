import { ListItem, List, HStack, Image, Button } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenre: number | null;
}

export default function GenreList(props: Props) {
  const genreHookObj = useGenre();
  const { genres, genreIsLoading, genreError } = genreHookObj;
  if (genreError) console.log("Error in fetching genres!!!");
  return (
    <>
      {genreIsLoading && <GenreSkeleton />}
      <List listStyleType={"none"}>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={3}>
            <HStack spacing={2}>
              <Image
                boxSize={10}
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                onClick={() => props.onSelectGenre(genre.id)}
                variant={props.selectedGenre === genre.id ? "solid" : "ghost"}
                fontSize={"lg"}
                fontWeight={
                  props.selectedGenre === genre.id ? "bold" : "normal"
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