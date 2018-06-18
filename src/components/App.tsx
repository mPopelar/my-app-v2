import * as React from "react";
import Hello from "src/containers/Hello";
import MyForm from "src/containers/MyFormContainer";

export function App(){

    return (
        <div>
            <Hello />
            <hr/>
            <MyForm />
        </div>
    );
}