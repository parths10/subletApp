import { ADD_LISTING, DELETE_LISTING, SET_LISTINGS, EDIT_RENT } from './actions';
import listing from "../Components/Listing";


const initialState = {
    listings: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LISTING:
            return {
                ...state,
                listings: [...state.listings, action.payload],
            };
        case DELETE_LISTING:
            return {
                ...state,
                listings: state.listings.filter(listing => listing.id !== action.payload),
            };
        case SET_LISTINGS:
            return {
                ...state,
                listings: action.payload,
            };

        case EDIT_RENT:
            const { listingId, newRent } = action.payload;
            return {
                ...state,
                listings: state.listings.map((listing) =>
                    listing.id === listingId ? { ...listing, rent: newRent } : listing
                ),
            };
        default:
            return state;
    }
};

export default rootReducer;
