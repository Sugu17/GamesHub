import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchInput: (searchText: string | null) => void;
}

export default function SearchInput(props: Props) {
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
          props.onSearchInput(searchButtonRef.current.value);
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
