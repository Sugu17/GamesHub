import { ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid() {
  const gameHookObj = useGame();
  const { games } = gameHookObj;
  const { error } = gameHookObj;
  const { isLoading } = gameHookObj;

  const gameCards = games.map((game) => <GameCard key={game.id} game={game} />);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing={"10"} padding={"6"}>
        {isLoading &&
          skeletons.map((index) => <GameCardSkeleton key={index} />)}
        {gameCards}
      </SimpleGrid>
    </>
  );
}
