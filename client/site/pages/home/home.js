import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { homeToDispatch } from "../../actions/home.actions";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";

import Slideshow from "../../components/slideshow/slideshow";
import Items from "../../components/itemList/item";


class HomeComponent extends React.Component{
    componentDidMount(){
        document.title = "AmazonClone - Home"
        this.props.getData();
    }
    render(){
        const { resp, isFetching } = this.props;
        const itemList = resp.data.map(item => 
            <Items key={item.id} id={item.id} name={item.itemName} description={item.itemDescription} price={item.price} pictures={item.pictures} />
        ); 
        const recentItems = resp.data.sort((a, b) => 
            new Date(b.lastViewed) - new Date(a.lastViewed)
        ).map(item => 
            <Items key={item.id} id={item.id} name={item.itemName} description={item.itemDescription} price={item.price} pictures={item.pictures} />
        );
        return (
            <div>
                <Slideshow />
                { resp.error && <p>Failed to load items</p> }
                <Grid>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <h4>Items on Sale</h4>
                        {itemList}
                    </Row>
                    <Row>
                        <h4>Items you have recently viewed</h4>
                        {recentItems}
                    </Row>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        resp: state.homeReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        getData: () => dispatch(homeToDispatch())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);