import { combineReducers } from "redux";
import { helloReducer } from "src/reducers/helloReducer";
import { myFormReducer } from "src/reducers/myFormReducer";

export const rootReducer = combineReducers({
    helloReducer,
    myFormReducer
  });