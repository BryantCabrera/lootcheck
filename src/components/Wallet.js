import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
    constructor() {
        super();

        this.state = {
            balance: undefined
        }
    }

    updateBalance = event => this.setState({ balance: parseInt(event.target.value, 10) })
    
    // deposit function comes from our redux store, accessible via props
    // in order to make it available, have to provide the action creator in that 2nd object parameter of the connect function
    deposit = () => this.props.deposit(this.state.balance)

    withdraw = () => this.props.withdraw(this.state.balance)

    render() {
        return (
            <div>
                <h3 className="balance">Wallet balance: {this.props.balance}</h3>
                <br />
                <input className="input-wallet" onChange={this.updateBalance} />
                <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
                <button className="btn-withdraw" onClick={this.withdraw}>Withdraw</button>
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
    // usually, you only want the specific relevant data from redux store that you want to be mapped onto the component.  So instead of assigning all of state, we just assign state.balance
    return { balance: state.balance }
    // deposit function comes from our redux store, accessible via props
        // in order to make it available, have to provide the action creator in that 2nd object parameter of the connect function
}, { deposit, withdraw })(Wallet);