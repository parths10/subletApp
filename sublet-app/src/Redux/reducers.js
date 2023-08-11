import { ADD_LISTING, DELETE_LISTING, SET_LISTINGS } from './actions';


const initialState = {
    listings: [], // Initialize with an empty array
    // ... other initial state properties
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

        default:
            return state;
    }
};

export default rootReducer;
