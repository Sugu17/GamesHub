import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

export default function GameCard(props: Props) {
  return (
    <Card borderRadius={12} overflow={"hidden"}>
      <Image src={props.game.background_image} />
      <CardHeader paddingY={0} paddingTop={3}>
        <Heading fontSize={"2xl"}>{props.game.name}</Heading>
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  );
}
