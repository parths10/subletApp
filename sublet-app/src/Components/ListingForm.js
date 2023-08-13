
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
        image: 'null',
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4555/insert', formData);
            console.log('Item added:', response.data);

            onAddListing(response.data);

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
            {showPopup && (
                <PopupForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    onClose={() => setShowPopup(false)}
                />
            )}
            <button onClick={() => setShowPopup(true)}>Post</button>
        </div>
    );
}

export default connect(null, { onAddListing: addListing })(ListingForm);