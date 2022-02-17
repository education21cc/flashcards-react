export enum CardType {
  Intro,
  Normal,
  Outro
}

export interface Card {
  type: CardType;
  id?: string;   // preferred way to set content of front. find content in translation file

  image?: string;
  frontText?: string;
  text?: string;
  subtext1?: string;
  subtext2?: string;
}
