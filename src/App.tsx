import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
        <GridItem area={"aside"} bg={"blue.400"}>
          Sidebar
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"cyan.500"}>
        Main
      </GridItem>
    </Grid>
  );
}
