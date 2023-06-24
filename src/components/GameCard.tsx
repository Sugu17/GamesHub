import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

export default function GameCard(props: Props) {
  const platformList = props.game.parent_platforms.map(
    ({ platform }) => platform
  );
  return (
    <Card borderRadius={12} overflow={"hidden"}>
      <Image src={props.game.background_image} />
      <CardHeader paddingY={0} paddingTop={3}>
        <Heading fontSize={"2xl"}>{props.game.name}</Heading>
      </CardHeader>
      <CardBody>
        <PlatformIconList platformList={platformList} />
      </CardBody>
    </Card>
  );
}
