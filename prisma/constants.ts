import { Prisma } from "@prisma/client";
import { getRandomSizesArray } from "./utility";

const CATEGORY = {
  bottoms: "Bottoms",
  dresses: "Dresses",
  tops: "Tops",
} as const;

const COLOR = {
  beige: "beige",
  blue: "blue",
  black: "black",
  green: "green",
  multi: "multi",
  pink: "pink",
  white: "white",
  yellow: "yellow",
} as const;

export const SIZES = ["XS", "S", "M", "L", "XL"] as const;

const dresses: Prisma.ProductCreateInput[] = [
  {
    name: "One Shoulder Black Mini Dress",
    imageUrl: "/dresses/1.webp",
    color: COLOR.black,
    price: 100,
  },
  {
    name: "Black One Shoulder Maxi Dresses",
    imageUrl: "/dresses/2.webp",
    color: COLOR.black,
    price: 182,
  },
  {
    name: "White Turtleneck Long Ruffled Sleeves Backless Dress",
    imageUrl: "/dresses/3.webp",
    color: COLOR.white,
    price: 147,
  },
  {
    name: "One Cape Sleeve Pleated Formal Dress",
    imageUrl: "/dresses/4.webp",
    color: COLOR.pink,
    price: 259,
  },
  {
    name: "Long Sleeve Sequin Mini Dress",
    imageUrl: "/dresses/5.webp",
    color: COLOR.black,
    price: 89,
  },
  {
    name: "Mermaid Satin Halter Backless Formal Dress",
    imageUrl: "/dresses/6.webp",
    color: COLOR.white,
    price: 215,
  },
  {
    name: "Tulle A-Line Halter Cap Sleeves Tiered Formal Dress",
    imageUrl: "/dresses/7.webp",
    color: COLOR.beige,
    price: 310,
  },
  {
    name: "Strapless a Line High Side Slit Formal Dress",
    imageUrl: "/dresses/8.webp",
    color: COLOR.black,
    price: 259,
  },
  {
    name: "Taffeta Sweetheart a Line Strapless Formal Dress",
    imageUrl: "/dresses/9.webp",
    color: COLOR.green,
    price: 349,
  },
  {
    name: "Satin V-Neck Bow open Back With Pockets A-Line Dress",
    imageUrl: "/dresses/10.webp",
    color: COLOR.black,
    price: 369,
  },
].map((item) => ({
  ...item,
  category: {
    connect: {
      name: CATEGORY.dresses,
    },
  },
  items: {
    create: getRandomSizesArray(),
  },
}));

const tops: Prisma.ProductCreateInput[] = [
  {
    name: "White Embroidered Blouse",
    imageUrl: "/tops/1.webp",
    color: COLOR.white,
    price: 45,
  },
  {
    name: "Floral Embroidery Blouse and Mini Skirt",
    imageUrl: "/tops/2.webp",
    color: COLOR.multi,
    price: 89,
  },
  {
    name: "Puff Short Sleeve Lace Blouse",
    imageUrl: "/tops/3.webp",
    color: COLOR.green,
    price: 30,
  },
  {
    name: "Peter Pan Lace Collar Floral Vintage Blouse",
    imageUrl: "/tops/4.webp",
    color: COLOR.multi,
    price: 62,
  },
  {
    name: "Embroidered Tassel V-Neck Loose Blouse",
    imageUrl: "/tops/5.webp",
    color: COLOR.black,
    price: 57,
  },
  {
    name: "Embroidered Splicing Chiffon Lace Blouse",
    imageUrl: "/tops/6.webp",
    color: COLOR.white,
    price: 29,
  },
  {
    name: "Long Puff Sleeve Skirt and Blouse Set",
    imageUrl: "/tops/7.webp",
    color: COLOR.beige,
    price: 76,
  },
].map((item) => ({
  ...item,
  category: {
    connect: {
      name: CATEGORY.tops,
    },
  },
  items: {
    create: getRandomSizesArray(),
  },
}));

const bottoms: Prisma.ProductCreateInput[] = [
  {
    name: "SunFlower A-Line Skirt",
    imageUrl: "/bottoms/1.webp",
    color: COLOR.yellow,
    price: 130,
  },
  {
    name: "Long Puff Sleeve Skirt and Blouse Set",
    imageUrl: "/bottoms/2.webp",
    color: COLOR.beige,
    price: 119,
  },
  {
    name: "Floral Printed High Elastic Waist Skirt",
    imageUrl: "/bottoms/3.webp",
    color: COLOR.multi,
    price: 54,
  },
  {
    name: "Pleated Crop Tops + Maxi Skirt 2 Piece Set",
    imageUrl: "/bottoms/4.webp",
    color: COLOR.beige,
    price: 74,
  },
  {
    name: "Yellow Leopard Elastic Waist A-Line Boho Maxi Skirt",
    imageUrl: "/bottoms/5.webp",
    color: COLOR.yellow,
    price: 65,
  },
  {
    name: "Denim Floral Embroidery Skirt",
    imageUrl: "/bottoms/6.webp",
    color: COLOR.blue,
    price: 48,
  },
  {
    name: "Pale Blue Floral Print Skirt",
    imageUrl: "/bottoms/7.webp",
    color: COLOR.blue,
    price: 50,
  },
  {
    name: "Floral Embroidery Blouse and Mini Skirt",
    imageUrl: "/bottoms/8.webp",
    color: COLOR.multi,
    price: 71,
  },
].map((item) => ({
  ...item,
  category: {
    connect: {
      name: CATEGORY.bottoms,
    },
  },
  items: {
    create: getRandomSizesArray(),
  },
}));

export const categories: Prisma.CategoryCreateInput[] = Object.values(CATEGORY).map((value) => ({
  name: value,
}));

export const products: Prisma.ProductCreateInput[] = [...dresses, ...tops, ...bottoms];
