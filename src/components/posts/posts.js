import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionPosts from './action/actions'
import * as actionCards from '../card/action/actions'
import $ from 'jquery'
class posts extends Component {
    _nameInput(namePost) {
        if ($('.namePost').is(':focus') || $('.idPost').is(':focus')) {
        }
    }
    _idInput(idPost) {
        if ($('.namePost').is(':focus') || $('.idPost').is(':focus')) {
        }
    }
    _onSubmit(){
        $('.namePost').blur()
        $('.idPost').blur()
        let namePost = $('.namePost').val()
        let idPost = $('.idPost').val()
        this.props.createPost({name:namePost,id:idPost})
    }
    render() {

        const {namePost,ID} = this.props.post || {}
        return (
            <div className = "post-main">
                <input className = 'namePost' type='text' placeholder='name' value={namePost} onChange = {event => {
                    this._nameInput(event.target.value)
                }}></input>
                <input className = 'idPost' type='number' value={ID} placeholder='ID' onChange = {event => {
                    this._idInput(event.target.value)
                }}></input>
                <button type = "submit" onClick={() => this._onSubmit()}>submit</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        post:state.post
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...actionPosts,
        ...actionCards
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(posts)
