import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "180px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="md">
        <GridItem area={"aside"} paddingX={4}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"} paddingY={2} paddingX={4}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
