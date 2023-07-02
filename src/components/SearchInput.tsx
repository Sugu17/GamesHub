import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../hooks/useStore";

export default function SearchInput() {
  const { setSearchText } = useGameQueryStore();

  const searchButtonRef = useRef<HTMLInputElement>(null);
  const formStyle = {
    width: "100%",
  };
  return (
    <form
      style={formStyle}
      onSubmit={(event) => {
        event.preventDefault();
        if (searchButtonRef.current)
          setSearchText(searchButtonRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder="Search Games..."
          borderRadius={30}
          variant={"filled"}
          ref={searchButtonRef}
          name="inputSearch"
        />
      </InputGroup>
    </form>
  );
}
