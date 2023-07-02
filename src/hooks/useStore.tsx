import { create } from "zustand";

interface GameQuery {
  genre?: Identifier;
  platform?: Identifier;
  searchText?: string;
  sortOrder?: string;
  pageParam?: number;
}

interface Identifier {
  id: number;
  name: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setPlatform: (platform: Identifier) => void;
  setGenre: (genre: Identifier) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: {
        searchText: searchText,
      },
    })),
  setPlatform: (platform) =>
    set((prevStore) => ({
      gameQuery: { ...prevStore.gameQuery, platform: platform },
    })),
  setGenre: (genre) =>
    set((prevStore) => ({
      gameQuery: { ...prevStore.gameQuery, genre: genre },
    })),
  setSortOrder: (sortOrder) =>
    set((prevStore) => ({
      gameQuery: { ...prevStore.gameQuery, sortOrder: sortOrder },
    })),
}));

export default useGameQueryStore;
