 import { getSetsApi } from "@/shared/api/sets/get-sets";
import { GetSetsParams, Set } from "./set";

export const SET_API = {
  getList: async ({ page, size }:GetSetsParams):Promise<Set[]> =>
  await  getSetsApi({ page, size }),
};
