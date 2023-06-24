import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function CriticScore(props: Props) {
  let badgeColor = "";
  if (props.score > 75) badgeColor = "green";
  else if (props.score > 50) badgeColor = "yellow";
  else badgeColor = "red";

  return (
    <Badge
      fontSize={"sm"}
      paddingX={2}
      borderRadius={4}
      colorScheme={badgeColor}
    >
      {props.score}
    </Badge>
  );
}
