// import React, { useState } from 'react';
// import './App.css';
// import ListingForm from './Components/ListingForm';
// import ListingsList from './Components/ListingsList';
// import logo from './media/logo.png';
// import { Provider } from 'react-redux';
// import store from './Redux/store';
// import { addListing } from './Redux/actions';
//
//
//
//
// function App() {
//
//     return (
//         <Provider store = {store}>
//         <div className="App">
//             <div className="navbar">
//                 <div className="logo">
//                     <img src={logo} alt="Logo" />
//                 </div>
//                 <h1>My Postings</h1>
//                 <ListingForm onAddListing={addListing} />
//             </div>
//             <ListingsList />
//         </div>
//         </Provider>
//     );
// }
//
// export default App;




import React, { useState } from 'react';
import './App.css';
import ListingForm from './Components/ListingForm';
import ListingsList from './Components/ListingsList';
import logo from './media/logo.png';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { addListing } from './Redux/actions';
import * as PropTypes from "prop-types";

function Link(props) {
    return null;
}

Link.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
};

function App() {
    const [selectedFilter, setSelectedFilter] = useState('all');

    return (
        <Provider store={store}>
            <div className="App">
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <h1>My Postings</h1>
                    <Link to="/visualization">Visualization</Link> {/* Add this line */}
                    <ListingForm onAddListing={addListing} />
                </div>
                <div className="navbar-filter">
                    <label htmlFor="filterResidence">Filter Residence:</label>
                    <select
                        id="filterResidence"
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                    >
                        <option value="all">All Residences</option>
                        <option value="Marine Drive">Marine Drive</option>
                        <option value="Ponderosa Commons">Ponderosa Commons</option>
                        <option value="Brock Commons">Brock Commons</option>
                        <option value="Thunderbird Residence">Thunderbird Residence</option>
                        <option value="Exchange Residence">Exchange Residence</option>
                        <option value="Pacific Residence">Pacific Residence</option>
                    </select>
                </div>
                <ListingsList selectedFilter={selectedFilter} />
            </div>
        </Provider>
    );
}

export default App;