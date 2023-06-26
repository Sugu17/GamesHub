import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import GameHeading from "./components/GameHeading";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string | null>(null);

  function handleSelectGenre(genreId: number) {
    console.log(`${genreId} selected!`);
    setSelectedGenre(genreId);
  }

  function handlePlatformChange(platformid: number | null) {
    console.log(`${platformid} selected!`);
    setSelectedPlatform(platformid);
  }

  function handleSearchInput(searchText: string | null) {
    setSearchText(searchText);
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
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"} paddingY={3} paddingX={4} mt={16}>
        <HStack
          justify={"start"}
          align={"center"}
          spacing={10}
          paddingBottom={6}
        >
          <GameHeading />
          <PlatformSelector
            onSelectedPlatform={handlePlatformChange}
            selectedPlatform={selectedPlatform}
          />
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          searchInputText={searchText}
        />
      </GridItem>
    </Grid>
  );
}
