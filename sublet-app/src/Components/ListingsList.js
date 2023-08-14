import React, { useState, useEffect } from 'react';
import './ListingsList.css';
import { setListings } from '../Redux/actions';
import Popup from './Popup';
import Listing from './Listing';
import { connect, useDispatch } from 'react-redux';

function ListingsList({ listings, selectedFilter }) {
    const [selectedListing, setSelectedListing] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    const handleDeleteClick = (listing) => {
        setSelectedListing(listing);
        setShowPopup(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            if (!selectedListing) {
                return;
            }

            const response = await fetch(`http://localhost:4555/delete/${selectedListing._id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Deleted data:', data);
            } else {
                throw new Error('Failed to delete data');
            }
        } catch (error) {
            console.error('Delete error:', error);
        } finally {
            setSelectedListing(null);
            setShowPopup(false);
        }
    };

    const handleDeleteCancel = () => {
        setSelectedListing(null);
        setShowPopup(false);
    };


    useEffect(() => {
        async function fetchData(selectedFilter) {
            try {
                const url = `http://localhost:4555/read/${encodeURIComponent(selectedFilter)}`;
                const response = await fetch(url);
                console.log('Response status:', response.status);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched data:', data);
                    setIsLoading(false);
                    dispatch(setListings(data));
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Fetch error:', error);
                setIsLoading(false);
            }
        }

        fetchData(selectedFilter); // Pass the selected filter value as the parameter
    }, [selectedFilter]);


    return (
        <div className="ListingsList">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                listings.map((listing, index) => (
                    <Listing
                        key={listing.id}
                        listing={listing}
                        onDeleteClick={() => handleDeleteClick(listing)}
                    />
                ))
            )}
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

export default connect(mapStateToProps)(ListingsList);