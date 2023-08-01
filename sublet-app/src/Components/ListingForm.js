import React, { useState } from 'react';
import './ListingForm.css';
import PopupForm from './PopupForm';

function ListingForm({ onAddListing }) {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        residenceArea: '',
        roomType: '',
        expectedRent: '',
        description: '',
        image: null,
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddListing(formData);
        setFormData({
            name: '',
            contact: '',
            residenceArea: '',
            roomType: '',
            expectedRent: '',
            description: '',
            image: null,
        });
        setShowPopup(false);
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

export default ListingForm;
