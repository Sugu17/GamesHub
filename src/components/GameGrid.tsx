import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Props {
  selectedGenre: number | null;
}

export default function GameGrid(props: Props) {
  const gameHookObj = useGame(props.selectedGenre);
  const { games } = gameHookObj;
  const { gameError } = gameHookObj;
  const { gameIsLoading } = gameHookObj;

  const gameCards = games.map((game) => (
    <GameCardContainer key={game.id}>
      <GameCard game={game} />
    </GameCardContainer>
  ));
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {gameError && <Text>{gameError}</Text>}

      <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing={"10"}>
        {gameIsLoading &&
          skeletons.map((index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {gameCards}
      </SimpleGrid>
    </>
  );
}
