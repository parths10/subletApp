import React from 'react';
import './PopupForm.css';

function PopupForm({ formData, handleChange, handleImageChange, handleSubmit, onClose }) {
    return (
        <div className="PopupForm">
            <div className="PopupFormContent">
                <h2>Enter Listing Information</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="contact">Contact:</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="Contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="residence">Residence:</label>
                    <select
                        id="residence"
                        name="residenceArea"
                        value={formData.residenceArea}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Residence</option>
                        <option value="Residence A">Residence A</option>
                        <option value="Residence B">Residence B</option>
                        {/* Add more residence options as needed */}
                    </select>

                    <label htmlFor="roomType">Room Type:</label>
                    <select
                        id="roomType"
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Room Type</option>
                        <option value="Single Room">Single Room</option>
                        <option value="Double Room">Double Room</option>
                        {/* Add more room type options as needed */}
                    </select>

                    <label htmlFor="expectedRent">Expected Rent:</label>
                    <input
                        type="number"
                        id="expectedRent"
                        name="expectedRent"
                        placeholder="Expected Rent"
                        value={formData.expectedRent}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="image">Image (optional):</label>
                    <input type="file" id="image" name="image" onChange={handleImageChange} />

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

