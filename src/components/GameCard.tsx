import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
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
    <Card borderRadius={12} overflow={"hidden"}>
      <Image src={getCroppedImageURL(props.game.background_image)} />
      <CardHeader paddingY={0} paddingTop={3}>
        <Heading fontSize={"2xl"}>{props.game.name}</Heading>
      </CardHeader>
      <CardBody>
        <HStack justify={"space-between"}>
          <PlatformIconList platformList={platformList} />
          <CriticScore score={props.game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}
