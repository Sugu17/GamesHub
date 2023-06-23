import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Text textTransform={"capitalize"}>Light Mode</Text>
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text textTransform={"capitalize"}>Dark Mode</Text>
    </HStack>
  );
}
