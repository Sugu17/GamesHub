import {
  Grid,
  GridItem,
  HStack,
  Show,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export default function App() {
  const colorMode = useColorMode().colorMode;
  const stickyElementBackground = {
    light: "#fff",
    dark: "gray.900",
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "225px 1fr",
      }}
    >
      <GridItem
        area={"nav"}
        position={"fixed"}
        top={0}
        zIndex={200}
        width={"100%"}
        background={stickyElementBackground[colorMode]}
      >
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem
          area={"aside"}
          paddingX={4}
          position={"fixed"}
          top={20}
          width={"225px"}
        >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"} marginY={{ base: "28", md: 20 }} paddingX={4}>
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={{ base: 4, sm: 8 }}
          align={"center"}
          justify={"space-between"}
          width={"100%"}
          paddingTop={{ base: 4 }}
          marginBottom={{ base: 0, md: 6 }}
          paddingBottom={{ base: 8, md: 8 }}
          position={"sticky"}
          top={{ base: "28", md: 14 }}
          background={stickyElementBackground[colorMode]}
          zIndex={200}
        >
          <GameHeading />
          <HStack
            spacing={{ base: 0, sm: 8 }}
            justify={{ base: "space-between", md: "end" }}
            width={"100%"}
          >
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Stack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
