import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Loot Check</h2>
//                 <hr />
//                 <Wallet />
//                 <hr />
//                 <Loot />
//             </div>
//         )
//     }
// }

// refactor into Stateless Functional Component
const App = () => {
    return (
        <div>
            <h2>Loot Check</h2>
            <hr />
            <Wallet />
            <hr />
            <Loot />
            <div>
                Powered by <a href="https://www.coindesk.com/price" target="_blank">Coindesk</a>
            </div>
        </div>
    )
}

export default App;