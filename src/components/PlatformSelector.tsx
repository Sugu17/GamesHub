import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platformId: Platform | null) => void;
  selectedPlatform: Platform | null;
}

export default function PlatformSelector(props: Props) {
  const { platforms, platformError } = usePlatforms();
  if (platformError) return null;
  return (
    <Box display={"inline-flex"}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {props.selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem
              onClick={() => props.onSelectedPlatform(platform)}
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
