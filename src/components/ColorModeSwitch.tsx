import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack whiteSpace={"nowrap"}>
      <Text
        fontWeight={colorMode === "light" ? "bold" : "normal"}
        textTransform={"capitalize"}
      >
        Light Mode
      </Text>
      <Switch
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        name="colorToggler"
      />
      <Text
        fontWeight={colorMode === "dark" ? "bold" : "normal"}
        textTransform={"capitalize"}
      >
        Dark Mode
      </Text>
    </HStack>
  );
}
