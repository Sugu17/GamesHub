import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logoIcon from "../assets/gamepad-solid.svg";

export default function NavBar() {
  return (
    <HStack paddingX={10} paddingY={2} justify={"space-between"}>
      <Image src={logoIcon} boxSize={"48px"}></Image>
      <ColorModeSwitch />
    </HStack>
  );
}
