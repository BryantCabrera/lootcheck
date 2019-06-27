import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

// we want to export the bare component for our tests
export class Loot extends Component {
    render() {
        return (
            <h3>Bitcoin balance:</h3>
        )
    }
}

export default connect(state => state, { fetchBitcoin })(Loot);