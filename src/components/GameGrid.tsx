import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useGameQueryStore from "../hooks/useStore";

export default function GameGrid() {
  const gameQuery = useGameQueryStore((select) => select.gameQuery);
  const { pages, gameError, gameIsLoading, hasNextPage, fetchNextPage } =
    useGame(gameQuery);

  const fetchedGamesCount = pages.reduce(
    (total, page) => (total += page.count),
    0
  );

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
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={fetchNextPage}
      loader={
        <Spinner
          margin={4}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
        />
      }
    >
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
    </InfiniteScroll>
  );
}
