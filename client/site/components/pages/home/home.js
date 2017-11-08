import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { homeToDispatch } from "../../../actions/home.actions";


class HomeComponent extends React.Component{
    componentDidMount(){
        this.props.getData();
    }
    render(){
        const { data, isFetching } = this.props;
        const itemList = data.data.map(item => 
            <li>{item.itemName}</li>
        )
        return (
            <div>
                {
                    data.error && <p>Failed to load items</p>
                }
                <ul>
                    {itemList}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        data: state.homeReducer
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