import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: { id: number; name: string } | null;
}

export default function GenreList(props: Props) {
  // const genreHookObj = useGenre();
  // const { genres, genreIsLoading, genreError } = genreHookObj;
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

  if (genreQuery.error) console.log("Error in fetching genres!!!");
  return (
    <Box>
      {genreQuery.isLoading && <GenreSkeleton />}
      <Heading fontSize={"2xl"} marginBottom={2}>
        Genres
      </Heading>
      <List
        listStyleType={"none"}
        display={"flex"}
        flexDirection={"column"}
        overflowY={"scroll"}
        height={"100vh"}
      >
        {genreQuery.data?.map((genre) => (
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
    </Box>
  );
}
