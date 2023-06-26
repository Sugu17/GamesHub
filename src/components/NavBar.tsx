import { HStack, Icon } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaGamepad } from "react-icons/fa";
export default function NavBar() {
  return (
    <HStack paddingX={4} paddingY={2} justify={"space-between"}>
      <Icon as={FaGamepad} boxSize={10} color={"blue.300"} />
      <ColorModeSwitch />
    </HStack>
  );
}
