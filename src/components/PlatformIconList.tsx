import { Platform } from "../hooks/useGames";
import {
  SiWindows11,
  SiPlaystation,
  SiLinux,
  SiXbox,
  SiNintendoswitch,
  SiApple,
  SiIos,
} from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import { FaGlobe } from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platformList: Platform[];
}

export default function PlatformIconList(props: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: SiWindows11,
    playstation: SiPlaystation,
    xbox: SiXbox,
    nintendo: SiNintendoswitch,
    mac: SiApple,
    linux: SiLinux,
    ios: SiIos,
    android: DiAndroid,
    web: FaGlobe,
  };
  const icons = props.platformList.map((platform) => {
    return (
      <Icon key={platform.id} as={iconMap[platform.slug]} color={"blue.300"} />
    );
  });
  return <HStack spacing={3}>{icons}</HStack>;
}
