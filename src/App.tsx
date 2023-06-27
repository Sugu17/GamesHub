import { useState } from "react";
import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import GameHeading from "./components/GameHeading";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

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

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
      }}
    >
      <GridItem
        area={"nav"}
        position={"fixed"}
        w={"100%"}
        zIndex={200}
        background={"Background"}
      >
        <NavBar onSearchInput={handleSearchInput} />
      </GridItem>
      <Show above="md">
        <GridItem
          area={"aside"}
          paddingX={4}
          height={"99vh"}
          overflowY={"scroll"}
          overscrollBehaviorY={"contain"}
          position={"sticky"}
          top={16}
          mt={16}
        >
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem
        area={"main"}
        paddingY={3}
        paddingX={4}
        mt={{ base: "28", md: 16 }}
        overflow={"hidden"}
      >
        <Stack
          paddingBottom={8}
          direction={{ base: "column", sm: "row" }}
          spacing={{ base: 4, sm: 8 }}
          justify={{ base: "space-between" }}
        >
          <GameHeading
            platformQuery={gameQuery.platform?.name}
            genreQuery={gameQuery.genre?.name}
          />
          <HStack spacing={{ base: 0, sm: 8 }} justify={"space-between"}>
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
