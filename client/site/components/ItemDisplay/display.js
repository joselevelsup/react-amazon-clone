import React from "react";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap"

export default class DisplayItem extends React.Component{

    render(){
        console.log(this.props.pictures);
        return(
            <Grid>
                <Row>
                    <Col xs={12} md={2}>
                        
                    </Col>
                    <Col md={6}>
                        <img src={this.props.pictures} className="img-responsive"/>
                    </Col>
                    <Col md={4}>
                        <h3>{this.props.name}</h3>
                        <p>{this.props.description}</p>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Grid>
        )
    }
}