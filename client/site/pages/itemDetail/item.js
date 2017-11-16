import React from "react";
import { connect } from "react-redux";
import { itemRetrieve } from "../../actions/itemDetails.actions";

import DisplayItem from "../../components/ItemDisplay/display";;

function mapStateToProps(state){
    return {
        resp: state.itemDetailReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        getItemData: (id) => dispatch(itemRetrieve(id))
    }
}

class ItemComponent extends React.Component{

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getItemData(id);
    }

    render(){
        const { resp, isFetching } = this.props;
        const item = resp.data;
        return (
            <DisplayItem name={item.itemName} description={item.itemDescription} pictures={item.pictures} />
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemComponent);