import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editRent } from '../Redux/actions';
import axios from "axios";

function EditRentPopupForm({ listing, onClose }) {
    const dispatch = useDispatch();
    const [newRent, setNewRent] = useState(listing.expectedRent);

    // Handle form submission to update rent
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            // PUT request to update the rent
            const response = await axios.put(`https://subletserver.onrender.com/update/${listing._id}`, {
                expectedRent: newRent,
            });

            if (response.status === 200) {
                // Update rent dispatcher
                dispatch(editRent(listing._id, newRent));
                onClose();
            } else {
                console.error('Failed to update rent');
            }
        } catch (error) {
            console.error('Update rent error:', error);
        }
    };

    return (
        <div className="PopupForm">
            <div className="PopupFormContent">
                <h2>Edit Rent</h2>
                <form>
                    <label htmlFor="newRent">New Rent Amount:</label>
                    <input
                        type="string"
                        id="newRent"
                        value={newRent}
                        onChange={(e) => setNewRent(e.target.value)}
                        required
                    />

                    <div className="PopupButtons">
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="button" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditRentPopupForm;
