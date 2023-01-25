import { createAction } from 'redux-act';

export const getWordsList = createAction();
export const setWordsList = createAction<any>();
export const getLearningWord = createAction();
export const setLearningWord = createAction<any>();