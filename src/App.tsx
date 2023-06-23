import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="md">
        <GridItem area={"aside"}>Sidebar</GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
