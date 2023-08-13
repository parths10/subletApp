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
                        <option value="Marine Drive">Marine Drive</option>
                        <option value="Ponderosa Commons">Ponderosa Commons</option>
                        <option value="Brock Commons">Brock Commons</option>
                        <option value="Thunderbird Residence">Thunderbird Residence</option>
                        <option value="Exchange Residence">Exchange Residence</option>
                        <option value="Pacific Residence">Pacific Residence</option>


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
                        <option value="2 Bedroom">2 Bedroom</option>
                        <option value="3 Bedroom">3 Bedroom</option>
                        <option value="4 Bedroom">4 Bedroomm</option>
                        <option value="Studio">Studio</option>
                        <option value="Nano Suite">Nano Suite</option>
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








