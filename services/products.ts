import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ROUT } from "./constants";

export const search = async (query: string) => {
  const { data } = await axiosInstance.get<Product[]>(ROUT.SEARCH_PRODUCTS, { params: { query } });
  return data;
};
