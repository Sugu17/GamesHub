import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"green.600"}>
        Navbar
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
