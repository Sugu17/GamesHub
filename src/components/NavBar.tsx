import { HStack, Icon, Show, Stack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaGamepad } from "react-icons/fa";
import SearchInput from "./SearchInput";

interface Props {
  onSearchInput: (searchText: string | null) => void;
}

export default function NavBar(props: Props) {
  return (
    <Stack
      paddingX={4}
      paddingY={2}
      spacing={4}
      direction={{ base: "column", md: "row" }}
    >
      <HStack justify={"space-between"}>
        <Icon as={FaGamepad} boxSize={10} color={"blue.300"} />
        <Show below="md">
          <ColorModeSwitch />
        </Show>
      </HStack>
      <SearchInput onSearchInput={props.onSearchInput} />
      <Show above="md">
        <ColorModeSwitch />
      </Show>
    </Stack>
  );
}
