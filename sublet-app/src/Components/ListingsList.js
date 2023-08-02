import React from 'react';
import './ListingsList.css';
import Listing from './Listing';
import { connect } from 'react-redux'; // importing connection


function ListingsList({ listings }) {
    return (
        <div className="ListingsList">
            {listings.map((listing, index) => (
                <Listing key={index} listing={listing} />
            ))}
        </div>
    );
}

// Connects the component to the Redux store
const mapStateToProps = (state) => ({
    listings: state.listings,
});

export default connect(mapStateToProps)(ListingsList);
