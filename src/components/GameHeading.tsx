import { Heading } from "@chakra-ui/react";

export default function GameHeading() {
  const headingText = "Games";
  return (
    <Heading as={"h1"} display={"inline-flex"}>
      {headingText}
    </Heading>
  );
}
