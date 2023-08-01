import React from 'react';
import './PopupForm.css';

function PopupForm({ formData, handleChange, handleImageChange, handleSubmit, onClose }) {
    return (
        <div className="PopupForm">
            <div className="PopupFormContent">
                <h2>Enter Listing Information</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {/* Add other input fields here */}
                    <button type="submit">Submit</button>
                    <button type="button" onClick={onClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PopupForm;
