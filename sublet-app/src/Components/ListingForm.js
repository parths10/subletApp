
import React, { useState } from 'react';
import './ListingForm.css';
import PopupForm from './PopupForm';
import { connect } from 'react-redux';
import { addListing } from '../Redux/actions';
import axios from 'axios';

function ListingForm({ onAddListing }) {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        residenceArea: '',
        roomType: '',
        expectedRent: '',
        description: '',
        image: '',
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e) => {
        setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4555/insert', formData);
            console.log('Item added:', response.data);

            // Assuming you have an action to update Redux store
            onAddListing(response.data);

            setFormData({
                name: '',
                contact: '',
                residenceArea: '',
                roomType: '',
                expectedRent: '',
                description: '',
                image: '',
            });

            setShowPopup(false);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className="ListingForm">
            {showPopup && (
                <PopupForm
                    formData={formData}
                    handleChange={handleChange}
                    handleImageChange={handleImageChange}
                    handleSubmit={handleSubmit}
                    onClose={() => setShowPopup(false)}
                />
            )}
            <button onClick={() => setShowPopup(true)}>Post</button>
        </div>
    );
}

export default connect(null, { onAddListing: addListing })(ListingForm);
