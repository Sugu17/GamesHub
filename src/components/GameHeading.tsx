import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../hooks/useStore";

export default function GameHeading() {
  const [selectedGenre, selectedPlatform] = useGameQueryStore((select) => [
    select.gameQuery.genre,
    select.gameQuery.platform,
  ]);
  return (
    <Heading as={"h1"} display={"inline-flex"} whiteSpace={"nowrap"}>
      {`${selectedGenre?.name ?? ""} ${selectedPlatform?.name ?? ""} Games`}
    </Heading>
  );
}
