//@ts-ignore
import { put, takeLatest } from "redux-saga/effects";
import * as Actions from "./actions";
import { authService } from "./service";

function* getAuthenticationSaga({ payload }: any): Generator<any> {
  try {
    const response = yield authService(payload);
    yield put(Actions.setAuthentication(response));
  } catch (e) {
    console.error(e);
  }
}

export default function* () {
  yield takeLatest(Actions.getAuthentication, getAuthenticationSaga);
}