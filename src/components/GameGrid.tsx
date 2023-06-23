import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { List, ListItem, Text, UnorderedList } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
  rating: number;
}

interface GamesResponse {
  gameCount: number;
  results: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Effect callback called...");
    apiClient
      .get<GamesResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error: Error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <UnorderedList>
        {games.map((game) => (
          <ListItem key={game.id}>{game.name}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
}
