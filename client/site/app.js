import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configStore from "./store";
import Layout from "./layout/layout";

export default class App extends React.Component {
    render(){
        return (
            <Provider store={configStore}>
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </Provider>
        );
    }
}
