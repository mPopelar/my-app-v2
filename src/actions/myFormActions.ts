import * as constants from '../constants/myFormConstants'

export interface IDisplayNewString {
    type: constants.DISPLAY_NEW_STRING;
}

// export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export function displayNewString(): IDisplayNewString {
    return {
        type: constants.DISPLAY_NEW_STRING
    }
}
