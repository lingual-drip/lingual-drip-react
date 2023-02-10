import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import authReducer from './auth/reducer';
import wordsListReducer from './words/reducer';
import userReducer from './user/reducer';
import rootSaga from './saga';

const reducers = combineReducers({
  auth: authReducer,
  wordsList: wordsListReducer,
  user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;