import { service } from "../../commons/axiosService";

export const wordsListService = async () => {
  const { data } = await service.get("/translations/getWordsListByUser");
  return data;
};
