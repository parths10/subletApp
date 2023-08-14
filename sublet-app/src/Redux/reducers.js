import { SET_LISTINGS, ADD_LISTING, EDIT_RENT, DELETE_LISTING } from './actions';

const initialState = {
    listings: []
};

// Manages listing's state for all actions
const listingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LISTINGS:
            return {
                ...state,
                listings: action.payload
            };
        case ADD_LISTING:
            return {
                ...state,
                listings: [...state.listings, action.payload]
            };
        case EDIT_RENT:
            return {
                ...state,
                listings: state.listings.map(listing =>
                     // Updates the rent
                    listing._id === action.payload.id
                        ? { ...listing, expectedRent: action.payload.newRent }
                        : listing
                )
            };
        case DELETE_LISTING:
            return {
                ...state,
                listings: state.listings.filter(listing => listing._id !== action.payload)
            };
        //returns default state
        default:
            return state;
    }
};

export default listingsReducer;
