import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface PlatformHook {
  platforms: Platform[];
  platformError: string;
}

export default function usePlatforms() {
  // const dataHookObj = useData<Platform>("/platforms/lists/parents");
  const response: PlatformHook = {
    platforms: platforms,
    platformError: "",
  };
  return response;
}
