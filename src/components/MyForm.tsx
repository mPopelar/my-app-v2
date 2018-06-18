import * as React from "react";

export interface IMyFormAttributes{
    stringToDisplay: string;
    onDisplayNewString: () => void;
}

export function MyForm( {stringToDisplay="", onDisplayNewString} : IMyFormAttributes ){

    return (
        <div>
            <button onClick={onDisplayNewString}>Display new string</button>
            
            here will be MyForm... : { stringToDisplay }
        </div>
    );
}