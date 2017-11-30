import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./layout.scss"

import {
    Navbar,
    Nav,
    NavDropdown,
    NavItem,
    MenuItem,
    FormControl,
    FormGroup,
    Button
} from "react-bootstrap";

import HomeComponent from "../pages/home/home";
import ItemDetailComponent from "../pages/itemDetail/item";
import SearchComponent from "../pages/search/search";

export default class Layout extends React.Component{
    
    constructor(){
        super();
        this.state = {
          redirect: null,
          searchText: ""
        };
        this.searchItems = this.searchItems.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        var target = e.target;
        var value = target.value;

        this.setState({
            searchText: value
        });
    }

    searchItems(e){
        e.preventDefault();

        if(this.state.searchText.length < 1){
            console.log("nothing. can't search");
        } else {
            this.setState({
                redirect: true
            });
        }
    }

    render(){
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">AmazonClone</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Categories" id="categorie-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Navbar.Form pullRight>
                            <FormGroup>
                            <FormControl type="text" placeholder="Search" onChange={this.handleChange}/>
                            </FormGroup>
                            {' '}
                            <Button type="button" onClick={this.searchItems}>Submit</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar> 
                {
                    this.state.redirect ?
                    <Redirect to={"/search?q="+this.state.searchText} />
                    :
                    null                     
                }
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/item/:id" component={ItemDetailComponent} />
                    <Route exact path="/search" component={SearchComponent} />
                </Switch>
            </div>
        );
    }
}