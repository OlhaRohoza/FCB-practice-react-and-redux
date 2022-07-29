import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
// import thunk from 'redux-thunk';
import { Presentational } from './Presentational';


const state = [];

const ADD = 'ADD';

const actionAddMessage = (message) => {
    return {
        type: ADD,
        message: message
    }
}

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.message];
        default:
            return state;
    }
}

export const mapStateToProps = (state) => {
    return {
        messages: state
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => { dispatch(actionAddMessage(message)) }
    }
}

export const store = createStore(messageReducer);

// const connect = ReactRedux.connect;
export const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);