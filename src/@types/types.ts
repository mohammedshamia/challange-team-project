import { ThemeConstants } from "../redux/contants/theme.constants";
export type theme = "light" | "dark";

export interface ToggleThemeAction {
  type: ThemeConstants.TOGGLE_THEME;
  payload: "light" | "dark";
}

export interface IProduct {
  countInStock: number;
  discount: number;
  price: number;
  description: string;
  brand: string;
  user?: string;
  name: string;
  _id?: string;
  images?: string[];
  colors?: string[];
  categories?: string[];
  rating?: number;
  numReviews?: number;
  reviews?: any[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

/**
    {
      "images": [
        "/images/airpods.jpg"
      ],
      "colors": [],
      "categories": [
        "Electronics",
        "LAPTOP",
        "ACCESSORIES"
      ],
      "rating": 4.5,
      "numReviews": 12,
      "price": 89.99,
      "discount": 0,
      "countInStock": 10,
      "_id": "61e82f47167ef207d4cb42a5",
      "name": "Airpods Wireless Bluetooth Headphones",
      "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      "brand": "Apple",
      "user": "61e82f47167ef207d4cb429f",
      "reviews": [],
      "__v": 0,
      "createdAt": "2022-01-19T15:33:27.569Z",
      "updatedAt": "2022-01-19T15:33:27.569Z"
    },
 */
