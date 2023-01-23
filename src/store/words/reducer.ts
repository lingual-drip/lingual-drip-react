import { createReducer } from "redux-act";
import { setWordsList } from "./actions";

const initialState: any = {
  wordsList: undefined,
};

export default createReducer(
  {
    [setWordsList as any]: (state: any, data: any) => ({
      ...state,
      wordsList: data,
    })
  },
  initialState
);
