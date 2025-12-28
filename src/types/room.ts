import { GameType } from "./game";

export type Room = {
  id: string;
  game: GameType;
  name: string;
  code: string;
  maxCapacity: number;
};
