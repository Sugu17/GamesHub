import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import useGame from "../hooks/useGames";

export default function GameGrid() {
  const gameHookObj = useGame();
  const { games, setGames } = gameHookObj;
  const { error, setError } = gameHookObj;

  return (
    <>
      {error && <Text>{error}</Text>}
      <UnorderedList>
        {games.map((game) => (
          <ListItem key={game.id}>{game.name}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
}
