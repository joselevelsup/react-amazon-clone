import React from "react";
import { Link } from "react-router-dom";
import {
    Col,
    Thumbnail
} from "react-bootstrap";

export default class Items extends React.Component{

    changeToCurrency(price){
        return "$"+price;
    }

    render(){
        return(
            <Col md={3}>
                <Link to={"/item/"+this.props.id.toString()}>
                    <Thumbnail src={this.props.pictures[0]}>
                        <h3>{this.props.name}</h3>
                        <p> {this.props.description}</p>
                        <span>{this.changeToCurrency(this.props.price)}</span>
                    </Thumbnail>
                </Link>
            </Col>
        );
    }
}