import React from "react";
import {
    Grid,
    Row,
    Col,
    Panel,
    Button
} from "react-bootstrap";

import PropTypes from "prop-types";

import "./display.scss";

export default class DisplayItem extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            image: this.props.pictures[0]
        }
        
        this.switchPic.bind(this);
    }

    switchPic(pic){
        this.setState({
            image: pic
        });
    }

    addToCart(id){
        
    }

    render(){
        return(
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <div className="bigPreview">
                            <img src={this.state.image} className="img-responsive"/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <Panel header={<h3><span className="priceBig">{this.props.price}</span> {this.props.name}</h3>} footer={<Button onClick={() => this.addToCart(id)}>Add to Cart</Button>}>
                            <p>{this.props.description}</p>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    {
                        this.props.pictures.map(p =>
                            <Col xs={12} md={3}>
                                <div className="preview">
                                    <img src={p} className="img-responsive" onMouseOver={() => this.switchPic(p)} />
                                </div>
                            </Col>       
                        )
                    }
                </Row>
            </Grid>
        )
    }
}


DisplayItem.propTypes = {
    id: PropTypes.any,
    name: PropTypes.string,
    description: PropTypes.string,
    pictures: PropTypes.array,
    price: PropTypes.string
}