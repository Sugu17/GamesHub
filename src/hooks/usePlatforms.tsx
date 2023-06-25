import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface PlatformHook {
  platforms: Platform[];
  platformError: string;
}

export default function usePlatforms() {
  const dataHookObj = useData<Platform>("/platforms/lists/parents");
  const response: PlatformHook = {
    platforms: dataHookObj.data,
    platformError: dataHookObj.error,
  };
  return response;
}
