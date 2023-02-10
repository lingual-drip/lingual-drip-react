//@ts-ignore
import { put, takeLatest } from "redux-saga/effects";
import * as Actions from "./actions";
import { userStatisticService } from "./service";

function* getUserStatisticSaga(): Generator<any> {
  try {
    const response = yield userStatisticService();
    yield put(Actions.setUserStatistic(response));
  } catch (e) {
    console.error(e);
  }
}

export default function* () {
  yield takeLatest(Actions.getUserStatistic, getUserStatisticSaga);
}