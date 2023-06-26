import { HStack, Icon } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaGamepad } from "react-icons/fa";
import SearchInput from "./SearchInput";

interface Props {
  onSearchInput: (searchText: string | null) => void;
}

export default function NavBar(props: Props) {
  return (
    <HStack paddingX={4} paddingY={2} spacing={4}>
      <Icon as={FaGamepad} boxSize={10} color={"blue.300"} />
      <SearchInput onSearchInput={props.onSearchInput} />
      <ColorModeSwitch />
    </HStack>
  );
}
