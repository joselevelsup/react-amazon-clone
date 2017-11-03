import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";

export default class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );
    }
}