import * as React from "react";
import './../../assets/scss/Example.scss';

export interface HelloProps {
//Write interface of this props here
};

export class Hello extends React.Component<HelloProps, undefined>{
    render() {
        return <h1>Hello, Rodgers from Movertrip Company :D. We make Frontend with React - TypeScript. A developer C# and Java can working with it</h1>;
    }
}