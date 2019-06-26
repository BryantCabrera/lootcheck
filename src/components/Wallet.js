import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
    render() {
        return (
            <div>
                <h3 className="balance">Wallet balance: {this.props.balance}</h3>
                <br />
                <input className="input-wallet" />
            </div>
        )
    }
}

// connect() returns a function that we can use to connect Wallet
// Connect takes 2 parameters
    // (a)	Function which describes what part of the redux store we want to use on this component; a.k.a. MapStateToProps; that data will now be available in props
    // (b)	Describes what action creators we want to use on the component to send data to the redux store
        // (i)	Can be null if not using it

// We need to export the component itself and import as { } since it’s not the default export
    // This is because the connected component export has a lot of context expectations that relate to that
export default connect(state => {
    // *when you try to implicitly return an object, it generates errors
        // So, you need an explicit return statement in the function
    return { balance: state };
}, null)(Wallet);