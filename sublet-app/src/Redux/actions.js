// Action types
export const ADD_LISTING = 'ADD_LISTING';
export const DELETE_LISTING = 'DELETE_LISTING';

// Action creators
export const addListing = (newListing) => ({
    type: ADD_LISTING,
    payload: newListing,
});

export const deleteListing = (listingId) => ({
    type: DELETE_LISTING,
    payload: listingId,
});
