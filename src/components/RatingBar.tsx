import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  rating: number;
}

export default function RatingBar(props: Props) {
  const ratingStars = [1, 2, 3, 4, 5].map((index) => (
    <Icon
      key={index}
      as={index <= props.rating ? AiFillStar : AiOutlineStar}
      boxSize={5}
    ></Icon>
  ));

  return <HStack>{ratingStars}</HStack>;
}
