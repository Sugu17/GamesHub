import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";

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
        <Heading fontSize={"2xl"} paddingBottom={6}>
          {props.game.name}
        </Heading>
      </CardHeader>
    </Card>
  );
}
