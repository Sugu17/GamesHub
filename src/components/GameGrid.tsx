import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { Fragment } from "react";

interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid(props: Props) {
  const {
    pages,
    gameError,
    gameIsLoading,
    hasNextPage,
    fetchNextPage,
    pageIsLoading,
  } = useGame(props.gameQuery);

  const gameCards = pages.map((page, pageIndex) => (
    //For each page in the query list create a fragment
    <Fragment key={pageIndex}>
      {/* Render the games of that page in the fragment */}
      {page.results.map((game) => {
        return (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        );
      })}
    </Fragment>
  ));
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Box>
      {gameError.message && <Text>{gameError.message}</Text>}

      <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing={"10"}>
        {gameIsLoading &&
          skeletons.map((index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {gameCards}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={fetchNextPage} marginY={10}>
          {pageIsLoading ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
}
