import React, { useState, useEffect } from 'react';
import './ListingsList.css';
import {deleteListing, setListings} from '../Redux/actions';
import Popup from './Popup';
import Listing from './Listing';
import {useDispatch, useSelector} from 'react-redux';

function ListingsList({ selectedFilter }) {
    const listings = useSelector(state => state?.listings || [])
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

            const response = await fetch(`https://subletserver.onrender.com/delete/${selectedListing._id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                dispatch(deleteListing(selectedListing._id));  // Dispatching the deleteListing action
                // console.log('Deleted data:', data);
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
                const url = `https://subletserver.onrender.com/read/${encodeURIComponent(selectedFilter)}`;
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

export default ListingsList;