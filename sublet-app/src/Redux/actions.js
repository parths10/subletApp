// Action types
export const ADD_LISTING = 'ADD_LISTING';
export const DELETE_LISTING = 'DELETE_LISTING';
export const SET_LISTINGS = 'SET_LISTINGS'; // New action type
export const EDIT_RENT = 'EDIT_RENT';



// Action creators
export const addListing = (newListing) => ({
    type: ADD_LISTING,
    payload: newListing,
});

export const deleteListing = (listingId) => ({
    type: DELETE_LISTING,
    payload: listingId,
});

// Action creators
export const setListings = (listings) => ({
    type: SET_LISTINGS,
    payload: listings,
});

// In your actions.js file
export const editRent = (listingId, newRent) => ({
    type: 'EDIT_RENT',
    payload: { listingId, newRent },
});


