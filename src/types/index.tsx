export interface IStoreState {
    languageName: string;
    enthusiasmLevel: number;
    stringToDisplay: string;
}

export const initStore: IStoreState = {
    enthusiasmLevel: 0,
    languageName: "",
    stringToDisplay: ""
}