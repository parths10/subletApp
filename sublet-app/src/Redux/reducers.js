import { SET_LISTINGS, ADD_LISTING, EDIT_RENT, DELETE_LISTING } from './actions';

const initialState = {
    listings: []
};

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
        default:
            return state;
    }
};

export default listingsReducer;
