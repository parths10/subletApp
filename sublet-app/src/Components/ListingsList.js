import React from 'react';
import './ListingsList.css';
import Listing from './Listing';

function ListingsList({ listings }) {
    return (
        <div className="ListingsList">
            {listings.map((listing, index) => (
                <Listing key={index} listing={listing} />
            ))}
        </div>
    );
}

export default ListingsList;
