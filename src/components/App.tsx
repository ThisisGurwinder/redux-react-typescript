import * as React from "react";
import './../../assets/scss/main.scss';

export interface AppProps {
    //Write interface of this props here
};

export class App extends React.Component<AppProps, undefined>{
    render() {
        return (
            <h1>
                Hello, i'm Rodgers and come from Movertrip Company.
                I create new seed for redux-react with typescript.
                It's familiar with Dev C# Java... Hope you love this.
            </h1>
        );
    }
}