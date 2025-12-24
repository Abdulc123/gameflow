export enum GameType {
  Poker = "poker",
  Mafia = "mafia",
}

export const isValidGameType = (value: string | null): value is GameType =>
  value === GameType.Poker || value === GameType.Mafia;

export const defaultGame: GameType = GameType.Mafia;
