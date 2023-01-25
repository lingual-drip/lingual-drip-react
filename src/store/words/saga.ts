//@ts-ignore
import { put, takeLatest } from "redux-saga/effects";
import * as Actions from "./actions";
import { learningWordtService, wordsListService } from "./service";

function* getWordsListSaga(): Generator<any> {
  try {
    const response = yield wordsListService();
    yield put(Actions.setWordsList(response));
  } catch (e) {
    console.error(e);
  }
}

function* getLearningWordSaga(): Generator<any> {
  try {
    const response = yield learningWordtService();
    yield put(Actions.setLearningWord(response));
  } catch (e) {
    console.error(e);
  }
}
export default function* () {
  yield takeLatest(Actions.getWordsList, getWordsListSaga);
  yield takeLatest(Actions.getLearningWord, getLearningWordSaga);
}