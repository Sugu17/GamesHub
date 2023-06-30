import { useState } from "react";
import {
  Grid,
  GridItem,
  HStack,
  Show,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import GameHeading from "./components/GameHeading";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

import "./App.css";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string | null;
  sortOrder: string | null;
}

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  function handleSelectGenre(genre: Genre) {
    setGameQuery({ ...gameQuery, genre });
  }

  function handlePlatformChange(platform: Platform | null) {
    setGameQuery({ ...gameQuery, platform });
  }

  function handleSearchInput(searchText: string | null) {
    setGameQuery({ ...gameQuery, searchText });
  }

  function handleSortOrderChange(sortOrder: string) {
    setGameQuery({ ...gameQuery, sortOrder });
  }

  const colorMode = useColorMode();

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
        background={colorMode.colorMode === "light" ? "#fff" : "gray.900"}
      >
        <NavBar onSearchInput={handleSearchInput} />
      </GridItem>
      <Show above="md">
        <GridItem
          area={"aside"}
          paddingX={4}
          position={"fixed"}
          top={20}
          width={"225px"}
        >
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenre={gameQuery.genre}
          />
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
          background={colorMode.colorMode === "light" ? "#fff" : "gray.900"}
          zIndex={200}
        >
          <GameHeading
            platformQuery={gameQuery.platform?.name}
            genreQuery={gameQuery.genre?.name}
          />
          <HStack
            spacing={{ base: 0, sm: 8 }}
            justify={{ base: "space-between", md: "end" }}
            width={"100%"}
          >
            <PlatformSelector
              onSelectedPlatform={handlePlatformChange}
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              onSelectSortOrder={handleSortOrderChange}
              currentOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Stack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}
