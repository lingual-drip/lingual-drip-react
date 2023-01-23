import { createReducer } from "redux-act";
import { getToken } from "../../commons/authentication/getToken";
import { setAuthentication } from "./actions";

const initialState: any = {
  token: getToken(),
};

export default createReducer(
  {
    [setAuthentication as any]: (state: any, data: any) => ({
      ...state,
      token: data,
    })
  },
  initialState
);
