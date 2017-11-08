import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./layout.scss"

import HomeComponent from "../pages/home/home";
import ItemDetailComponent from "../pages/itemDetail/item";
import SearchComponent from "../pages/search/search";

export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/item/:id" component={ItemDetailComponent} />
                <Route exact path="/search" component={SearchComponent} />
            </div>
        );
    }
}