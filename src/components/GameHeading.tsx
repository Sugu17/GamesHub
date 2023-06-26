import { Heading } from "@chakra-ui/react";

interface Props {
  platformQuery: string | undefined;
  genreQuery: string | undefined;
}

export default function GameHeading(props: Props) {
  return (
    <Heading as={"h1"} display={"inline-flex"}>
      {`${props.genreQuery ?? ""} ${props.platformQuery ?? ""} Games`}
    </Heading>
  );
}
