import { ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const gameHookObj = useGame();
  const { games, setGames } = gameHookObj;
  const { error, setError } = gameHookObj;

  const gameCards = games.map((game) => <GameCard key={game.id} game={game} />);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing={"10"} padding={"6"}>
        {gameCards}
      </SimpleGrid>
    </>
  );
}
