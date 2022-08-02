import React from "react";
import { connect } from 'react-redux';
import { actionAddMessage } from './Redux';

class Presentational extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitNewMessage(this.state.input);
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div className="message__container">
                <h2>Type in a new Message: </h2>
                <div className="message___add">
                    <input type='text' value={this.state.input} onChange={this.handleChange} style={{ width: 200, marginRight: 10 }} />
                    <button onClick={this.handleSubmit} style={{ width: 200 }} >Add a message</button>
                </div>
                <div className="message___display">
                    <ul>
                        {
                            this.props.messages &&
                            this.props.messages.map((message, i) => (
                                <li key={i}>{message}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>)
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



// const connect = ReactRedux.connect;
export const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
