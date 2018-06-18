import { AnyAction, createStore } from 'redux';
import { rootReducer } from './reducers';
import { IStoreState } from './types/index';

export const store = createStore<IStoreState, AnyAction, null, null>(rootReducer, {
  enthusiasmLevel: 1,
  languageName: "TypeScript",
  stringToDisplay: "default string"
});