import { createReducer } from "redux-act";
import { setWordsList, setLearningWord } from "./actions";

const initialState: any = {
  wordsList: undefined,
  learningWord: undefined
};

export default createReducer(
  {
    [setWordsList as any]: (state: any, data: any) => ({
      ...state,
      wordsList: data,
    }),
    [setLearningWord as any]: (state: any, data: any) => ({
      ...state,
      learningWord: data,
    })
  },
  initialState
);
