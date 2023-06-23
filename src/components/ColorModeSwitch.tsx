import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Text
        fontWeight={colorMode === "light" ? "bold" : "normal"}
        textTransform={"capitalize"}
      >
        Light Mode
      </Text>
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
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
