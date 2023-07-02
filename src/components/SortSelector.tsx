import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
  Show,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../hooks/useStore";

export default function SortSelector() {
  const { gameQuery, setSortOrder } = useGameQueryStore();
  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Ratings" },
    { value: "-added", label: "Date Added" },
    { value: "-released", label: "Release Date" },
  ];
  return (
    <Box display={"inline-flex"}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          <Show above="lg">Order by : </Show>
          {sortOrders.find((order) => order.value === gameQuery.sortOrder)
            ?.label ?? "Relevence"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => setSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
