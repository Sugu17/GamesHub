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
import useGameQueryStore from "../hooks/useStore";

export default function PlatformSelector() {
  const { platforms, platformError } = usePlatforms();
  const { gameQuery, setPlatform } = useGameQueryStore();
  if (platformError) return null;
  return (
    <Box display={"inline-flex"}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {gameQuery.platform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem
              onClick={() =>
                setPlatform({ id: platform.id, name: platform.name })
              }
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
