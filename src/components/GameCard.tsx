import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

export default function GameCard(props: Props) {
  return (
    <Card borderRadius={12} overflow={"hidden"}>
      <Image src={props.game.background_image} />
      <CardHeader>
        <Heading fontSize={"2xl"}>{props.game.name}</Heading>
      </CardHeader>
    </Card>
  );
}
