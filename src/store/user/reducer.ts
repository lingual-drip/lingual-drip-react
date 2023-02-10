import { createReducer } from "redux-act";
import { setUserStatistic } from "./actions";

const initialState: any = {
  statistic: undefined
};

export default createReducer(
  {
    [setUserStatistic as any]: (state: any, data: any) => ({
      ...state,
      statistic: data,
    }),
  },
  initialState
);
