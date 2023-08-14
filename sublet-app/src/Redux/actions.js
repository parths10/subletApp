export const SET_LISTINGS = 'SET_LISTINGS';
export const ADD_LISTING = 'ADD_LISTING';
export const EDIT_RENT = 'EDIT_RENT';
export const DELETE_LISTING = 'DELETE_LISTING';

export const setListings = (listings) => ({
    type: SET_LISTINGS,
    payload: listings
});

export const addListing = (listing) => ({
    type: ADD_LISTING,
    payload: listing
});

export const editRent = (id, newRent) => ({
    type: EDIT_RENT,
    payload: {
        id,
        newRent
    }
});

export const deleteListing = (id) => ({
    type: DELETE_LISTING,
    payload: id
});


