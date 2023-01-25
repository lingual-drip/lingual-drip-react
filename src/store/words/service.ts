import { logOut } from "../../commons/authentication/logOut";
import service from "../../commons/axiosService";

export const wordsListService = async () => {
  const { data } = await service.get("/learning-words/get-words-list-by-user");
  return data;
};

export const learningWordtService = async () => {
  try {
    const { data } = await service.get(
      "/learning-words/get-next-word-to-learn"
    );
    return data;
  } catch (e: any) {
    if (e.response.statusText === "Unauthorized") logOut()
  }
};
