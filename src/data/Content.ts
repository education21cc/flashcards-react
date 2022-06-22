import { Card } from "./Card";
import { Instruction } from "./Instruction";

export type Content = {
  cards: Card[],
  instructions: Instruction[]
  skipIntroCard?: boolean       // Whether to skip intro
  completeOptions?: CompleteOption[] // What to show at the end
  maxScore?: number // temporary, until backend is ready
}

export type CompleteOption = 'reset' | 'exit'
