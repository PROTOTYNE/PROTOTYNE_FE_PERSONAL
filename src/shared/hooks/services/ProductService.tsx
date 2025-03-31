import { AxiosResponse } from "axios";

import { API } from "@/shared";

export const ProductService = () => {
  const url = "/product";

  const getProductList = async (params: Product.CategoryListReqDto) => {
    const {
      data: { result },
    } = (await API.get(`${url}/list`, {
      params,
    })) as AxiosResponse<Product.CategoryListDto>;

    return result;
  };

  return { getProductList };
};
