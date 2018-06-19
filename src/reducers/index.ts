import { combineReducers, Reducer } from "redux";
import { helloReducer } from "src/reducers/helloReducer";
// import { myFormReducer } from "src/reducers/myFormReducer";
import { IStoreState } from "../types";


// export const rootReducer: Reducer<IStoreState> = combineReducers<IStoreState>({
//     helloReducer,
//     myFormReducer
//   });


// export const rootReducer: Reducer<IStoreState, AnyAction> = combineReducers<IStoreState, AnyAction>(
//     {
//         helloReducer,
//         myFormReducer
//     }
// );


export const rootReducer: Reducer<IStoreState> = combineReducers<IStoreState>(
    { 
       helloReducer
    });