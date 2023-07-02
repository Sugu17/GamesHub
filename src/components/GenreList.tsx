import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";

import getCroppedImageURL from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import useGenre from "../hooks/useGenres";
import useGameQueryStore from "../hooks/useStore";

export default function GenreList() {
  const genreQuery = useGenre();
  const { setGenre, gameQuery } = useGameQueryStore();

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
                onClick={() => setGenre({ id: genre.id, name: genre.name })}
                variant={gameQuery.genre?.id === genre.id ? "solid" : "ghost"}
                fontSize={"lg"}
                fontWeight={
                  gameQuery.genre?.id === genre.id ? "bold" : "normal"
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
