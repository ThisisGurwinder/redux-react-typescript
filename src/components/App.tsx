import * as React from "react";
import './../../assets/scss/main.scss';

export interface AppProps {
    //Write interface of this props here
};

export class App extends React.Component<AppProps, undefined>{
    render() {
        return (
            <h1>Hello, Rodgers from Movertrip Company :D. We make Frontend with React - TypeScript.
        A developer C# and Java can working with it</h1>
        );
    }
}