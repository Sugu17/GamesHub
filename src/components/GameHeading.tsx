import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../hooks/useStore";

export default function GameHeading() {
  const { gameQuery } = useGameQueryStore();
  return (
    <Heading as={"h1"} display={"inline-flex"} whiteSpace={"nowrap"}>
      {`${gameQuery.genre?.name ?? ""} ${gameQuery.platform?.name ?? ""} Games`}
    </Heading>
  );
}
