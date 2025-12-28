export enum GameType {
  All = "all",
  Poker = "poker",
  Mafia = "mafia",
}

export const isValidGameType = (value: string | null): value is GameType =>
  value === GameType.Poker || value === GameType.Mafia;

export function getGameIconPath(gameType: GameType) {
  return `${import.meta.env.BASE_URL}images/icons/${gameType}_icon.png`;
}

export const defaultGame: GameType = GameType.Mafia;
