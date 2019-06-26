import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
    render() {
        return (
            <div>
                <h3>Wallet balance:{this.props.balance}</h3>
            </div>
        )
    }
}

// connect() returns a function that we can use to connect Wallet
// ii.Connect takes 2 parameters
    // (a)	Function which describes what part of the redux store we want to use on this component; a.k.a. MapStateToProps; that data will now be available in props
    // (b)	Describes what action creators we want to use on the component to send data to the redux store
        // (i)	Can be null if not using it

export default connect(state => { balance: state}, null)(Wallet);