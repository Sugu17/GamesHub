import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

export default function GenreSkeleton() {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];
  return (
    <List>
      {skeletons.map((index) => (
        <ListItem key={index} paddingY={3}>
          <HStack spacing={3}>
            <Skeleton boxSize={10} borderRadius={8} />
            <SkeletonText noOfLines={1} fontSize={"lg"}>
              Genre Name
            </SkeletonText>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
