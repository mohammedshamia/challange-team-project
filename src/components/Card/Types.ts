export interface Card {
  img: string;
  name: string;
  price?: number;
  valueRating?: number;
  discountValue?: number;
  borderRadius?: string;
  boxShadow?: string | undefined;
}
