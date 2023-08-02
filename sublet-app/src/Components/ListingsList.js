
import React, { useState } from 'react';
import './ListingsList.css';
import { deleteListing } from '../Redux/actions';
import Popup from './Popup';

import Listing from './Listing';
import { connect } from 'react-redux';


function ListingsList({ listings, onDeleteListing }) {
    const [selectedListing, setSelectedListing] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleDeleteClick = (listing) => {
        setSelectedListing(listing);
        setShowPopup(true);
    };

    const handleDeleteConfirm = () => {
        onDeleteListing(selectedListing.id);
        setShowPopup(false);
    };

    const handleDeleteCancel = () => {
        setSelectedListing(null);
        setShowPopup(false);
    };

    return (
        <div className="ListingsList">
            {listings.map((listing, index) => (
                <Listing
                key={listing.id}
                listing={listing}

                onDeleteClick={() => handleDeleteClick(listing)}
                />
            ))}
            {showPopup && (
                <Popup
                    message="Are you sure you want to delete this posting?"
                    onCancel={handleDeleteCancel}
                    onConfirm={handleDeleteConfirm}
                />
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    listings: state.listings,
});

const mapDispatchToProps = (dispatch) => ({
    onDeleteListing: (listingId) => dispatch(deleteListing(listingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsList);
