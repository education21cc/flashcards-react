import { Card } from "./Card";
import { Instruction } from "./Instruction";

export type Content = {
  cards: Card[],
  instructions: Instruction[]
  skipIntroCard: boolean
}
