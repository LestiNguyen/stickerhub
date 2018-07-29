import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCard from './action/actions'
import {bindActionCreators} from 'redux'

class card extends Component {

    render() {
        return (
            <div className="card-main">
                <div className="card-header">
                    <span></span>
                </div>
                <div className="card-body"></div>
                <div className="card-footer"></div>
            </div>
        );
    }
}
const mapStateToProps = (card) => {
    return card
    console.log('card.name: ', card);
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...actionCards
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(card)