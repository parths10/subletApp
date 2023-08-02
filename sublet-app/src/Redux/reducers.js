import { ADD_LISTING, DELETE_LISTING } from './actions';

const initialState = {
    listings: [
        {
            name: 'Parth',
            contact: '2368652290',
            residenceArea: 'Marine Drive',
            roomType: 'Four Bedroom',
            expectedRent: '1000',
            description: 'non-smokers please',
            // image: "pl",

        },
        {
            name: 'Vedant',
            contact: '23498423',
            residenceArea: 'Thunderbird',
            roomType: 'Studio',
            expectedRent: '1200',
            description: 'non-smokers please',
            // image: "pl",
        }
    ],
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
        default:
            return state;
    }
};

export default rootReducer;
