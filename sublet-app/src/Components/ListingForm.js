import React, { useState } from 'react';
import './ListingForm.css';
import PopupForm from './PopupForm';
import { useDispatch } from 'react-redux';  // Using Redux's useDispatch hook
import { addListing } from '../Redux/actions';
import axios from 'axios';

function ListingForm() {
    // State to manage form data and popup visibility
    const dispatch = useDispatch();  // Using Redux's useDispatch hook
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        residenceArea: '',
        roomType: '',
        expectedRent: '',
        description: '',
        image: 'null',
    });
    const [showPopup, setShowPopup] = useState(false);

    // Function to handle input changes in the form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to add a new listing
            const response = await axios.post('https://subletserver.onrender.com/insert', formData);
            console.log('Item added:', response.data);


            // Update the Redux store with the new listing
            // onAddListing(response.data);
            dispatch(addListing(response.data));  // Dispatching the addListing action

            // Reset form data and hide the popup
            setFormData({
                name: '',
                contact: '',
                residenceArea: '',
                roomType: '',
                expectedRent: '',
                description: '',
                image: 'null',
            });
            setShowPopup(false);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className="PostListingForm">
            {/* Display the popup form when showPopup is true */}
            {showPopup && (
                <PopupForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    onClose={() => setShowPopup(false)}
                />
            )}
            {/* Button to open the popup form */}
            <button onClick={() => setShowPopup(true)}>Post</button>
        </div>
    );
}

// Connect the component to Redux and map the onAddListing action
export default ListingForm;
