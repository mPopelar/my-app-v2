import { AnyAction } from 'redux';
// import { EnthusiasmAction } from 'src/actions/indexActions';
// import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/index';
import { IStoreState } from '../types/index';

// function loggingIdentity<T>(arg: Array<T>): Array<T> {


// export function helloReducer(state: IStoreState, action: AnyAction) : IStoreState {
//   switch (action.type) {
//     case INCREMENT_ENTHUSIASM:
//       return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
//     case DECREMENT_ENTHUSIASM:
//       return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
//   }
//   return state;
// }

export function helloReducer(state: IStoreState, action: AnyAction)  {
  // tslint:disable-next-line:no-console
  console.log("dd")
}


// https://github.com/reduxjs/redux/issues/2709