import { ListItem, List, HStack, Image, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

export default function GenreList() {
  const genreHookObj = useGenre();
  const { genres } = genreHookObj;
  return (
    <List listStyleType={"none"}>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={3}>
          <HStack spacing={3}>
            <Image
              boxSize={10}
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
