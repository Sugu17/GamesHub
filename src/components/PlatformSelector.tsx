import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platformId: number | null) => void;
  selectedPlatform: number | null;
}

export default function PlatformSelector(props: Props) {
  const { platforms, platformError } = usePlatforms();
  if (platformError) return null;
  return (
    <Box paddingBottom={6}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platforms.find((platform) => platform.id === props.selectedPlatform)
            ?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem
              onClick={() => props.onSelectedPlatform(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
