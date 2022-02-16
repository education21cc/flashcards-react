export enum CardType {
  Intro,
  Normal,
  Outro
}

export interface Card {
  type: CardType;
  front: string; // preferred way to set content of front. markdown enabled string
  back: string;  // preferred way to set content of front. markdown enabled string

  image?: string;
  frontText?: string;
  text?: string;
  subtext1?: string;
  subtext2?: string;
}
