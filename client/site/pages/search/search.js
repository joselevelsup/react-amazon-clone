import React from "react";
import { connect } from "react-redux"
import {
    Grid,
    Row,
    Col
} from "react-bootstrap"

import Items from "../../components/itemList/item";

import { beginSearch } from "../../actions/search.actions";

function mapStateToProps(state){
    return {
        resp: state.searchReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        getSearchData: (search) => dispatch(beginSearch(search))
    }
}

class SearchComponent extends React.Component{

    componentWillMount(){
        var q = this.props.location.search;
        var params = new URLSearchParams(q).get("q");

        this.props.getSearchData(params);
    }

    render(){
        const { resp, isFetching } = this.props;
        return (
            <div>
                { 
                    resp.error && <p>Failed to load items</p> 
                }
                <Grid fluid={true}>
                    {
                        resp.data.success ?
                        resp.data.items.map((item, index) => 
                            <Items key={index} id={item.id} name={item.itemName} description={item.itemDescription} price={item.price} pictures={item.pictures} />                            
                        )
                        :
                        <p>Loading</p>
                    }
                </Grid>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent);