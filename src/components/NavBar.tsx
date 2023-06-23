import { HStack, Image } from "@chakra-ui/react";
import logoIcon from "../assets/gamepad-solid.svg";

export default function NavBar() {
  return (
    <HStack paddingX={4}>
      <Image src={logoIcon} boxSize={"48px"}></Image>
    </HStack>
  );
}
