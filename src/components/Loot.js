import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

// we want to export the bare component for our tests
export class Loot extends Component {
    componentDidMount() {
        this.props.fetchBitcoin();
    }

    computeBitcoin() {
        const { bitcoin } = this.props;

        // guard clause = in the middle of our test, if we execute some behavior and run a condition and check that it's true, then we immediately return out of the function
        if (Object.keys(bitcoin).length === 0) return '';

        // use .replace(‘,’, ‘’) to replace all commas with nothing
            // replace(‘itemToReplace’, ‘whatToReplaceItWith’)
        return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
    }

    render() {
        return (
            <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
        )
    }
}

export default connect(state => state, { fetchBitcoin })(Loot);