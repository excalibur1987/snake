export interface ISnakePart {
  row: number;
  col: number;
}
export interface ISnake {
  body: ISnakePart[];
  // currentDirection: directions;
}
export type validDirections = "up" | "down" | "right" | "left";
