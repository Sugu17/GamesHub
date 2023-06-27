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

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  currentOrder: string | null;
}

export default function SortSelector(props: Props) {
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
          <Show above="md">Order by : </Show>
          {sortOrders.find((order) => order.value === props.currentOrder)
            ?.label ?? "Relevence"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => props.onSelectSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
