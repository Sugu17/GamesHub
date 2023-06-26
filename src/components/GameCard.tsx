import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";
import RatingBar from "./RatingBar";

interface Props {
  game: Game;
}

export default function GameCard(props: Props) {
  const platformList = props.game.parent_platforms.map(
    ({ platform }) => platform
  );
  return (
    <Card>
      <Image src={getCroppedImageURL(props.game.background_image)} />
      <CardBody paddingTop={3}>
        <HStack justify={"space-between"}>
          <PlatformIconList platformList={platformList} />
          <CriticScore score={props.game.metacritic} />
        </HStack>
      </CardBody>
      <CardHeader paddingY={0}>
        <Heading fontSize={"2xl"} paddingBottom={3}>
          {props.game.name}
        </Heading>
      </CardHeader>
      <CardFooter paddingY={0} paddingBottom={4}>
        <RatingBar rating={Math.floor(props.game.rating)} />
      </CardFooter>
    </Card>
  );
}
