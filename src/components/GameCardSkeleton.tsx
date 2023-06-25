import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

export default function GameCardSkeleton() {
  const platformIconSkeletons = [1, 2, 3, 4];
  return (
    <Card>
      <Skeleton height={"200px"} />
      <CardHeader paddingY={0} paddingTop={3}>
        <SkeletonText fontSize={"2xl"} />
      </CardHeader>
      <CardBody>
        <HStack spacing={3}>
          {platformIconSkeletons.map((index) => (
            <SkeletonCircle key={index} />
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
}
