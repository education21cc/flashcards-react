export enum CardType {
  Intro,
  Normal,
  Outro
}

export interface Card {
  type: CardType;
  image: string;
  frontText: string;
  text: string;
  subtext1: string;
  subtext2: string;
} 
  