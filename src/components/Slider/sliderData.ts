import { Card } from "../Card/Types";

interface Idata {
  topTitle: string;
  mainTitle: string;
  subTitle: string;

  image: string;
}

export const DataBannerSlider: Idata[] = [
  {
    topTitle: "Save up to $39.99",
    mainTitle: "PlayStation 5",
    subTitle: "Lightning-fast download speed with super-fast SSD storage",
    image: "/static/img1.PNG",
  },
  {
    topTitle: "Save up to $49.99",
    mainTitle: "APPLE AIRPODS",
    subTitle: "AirPods are the best-selling headphones in the world",
    image: "/static/img12.PNG",
  },
  {
    topTitle: "Save up to $99.99",
    mainTitle: "iPhone 11 PRO",
    subTitle: "Pro cameras.Pro display. Pro performance.",
    image: "/static/img13.PNG",
  },
];

interface IdataCatagory {
  id: number;
  page: IData[];
}

interface IData {
  title: string;
  image: string;
}

export const DataCatagorySlider: IdataCatagory[] = [
  {
    id: 1,
    page: [
      {
        title: "LAPTOP",
        image: "/static/img1.PNG",
      },
      {
        title: "COMPUTER COMPONENTS",
        image: "/static/img12.PNG",
      },
      {
        title: "DEVICES",
        image: "/static/img13.PNG",
      },
      {
        title: "COMPUTER COMPONENTS",
        image: "/static/img12.PNG",
      },
    ],
  },
  {
    id: 2,
    page: [
      {
        title: "LAPTOP",
        image: "/static/img1.PNG",
      },
      {
        title: "DEVICES",
        image: "/static/img13.PNG",
      },
      {
        title: "COMPUTER COMPONENTS",
        image: "/static/img12.PNG",
      },
      {
        title: "COMPUTER COMPONENTS",
        image: "/static/img12.PNG",
      },
    ],
  },
  {
    id: 3,
    page: [
      {
        title: "LAPTOP",
        image: "/static/img1.PNG",
      },
      {
        title: "DEVICES",
        image: "/static/img13.PNG",
      },
      {
        title: "COMPUTER COMPONENTS",
        image: "/static/img12.PNG",
      },
      {
        title: "LAPTOP",
        image: "/static/img1.PNG",
      },
    ],
  },
  {
    id: 4,
    page: [
      {
        title: "LAPTOP",
        image: "/static/img1.PNG",
      },
      {
        title: "DEVICES",
        image: "/static/img13.PNG",
      },
      {
        title: "COMPUTER COMPONENTS",
        image: "/static/img12.PNG",
      },
      {
        title: "LAPTOP",
        image: "/static/img1.PNG",
      },
    ],
  },
];
interface IdataProdect {
  page: Card[];
}

export const DataProdectSlider: IdataProdect[] = [
  {
    page: [
      {
        name: "Amazon Echo Dot 3rd Generation",
        img: "/static/prodect.PNG",
        price: 29.99,
        valueRating: 3.5,
      },
      {
        name: "LAPTOP",
        img: "/static/prodect.PNG",
        price: 345,
        discountValue: 30,
      },
      {
        name: "LAPTOP",
        img: "/static/prodect.PNG",
        price: 29.99,
        valueRating: 3.5,
      },
    ],
  },

  {
    page: [
      {
        name: "Amazon Echo Dot 3rd Generation",
        img: "/static/prodect.PNG",
        price: 345,
        discountValue: 30,
      },
      {
        name: "LAPTOP",
        img: "/static/prodect.PNG",
        price: 345,
        discountValue: 30,
      },
      {
        name: "LAPTOP",
        img: "/static/img1.PNG",
        price: 345,
        discountValue: 30,
      },
    ],
  },
  {
    page: [
      {
        name: "LAPTOP",
        img: "/static/prodect.PNG",
        price: 345,
        discountValue: 30,
      },
      {
        name: "LAPTOP",
        img: "/static/prodect.PNG",
        price: 345,
        discountValue: 30,
      },
      {
        name: "LAPTOP",
        img: "/static/prodect.PNG",
        price: 345,
        discountValue: 30,
      },
    ],
  },
];
