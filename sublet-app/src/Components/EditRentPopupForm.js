
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { editRent } from '../Redux/actions';
// import './PopupEdit.css';
import axios from "axios";


function EditRentPopupForm({ listing, onClose }) {
    const dispatch = useDispatch();
    const [newRent, setNewRent] = useState(listing.expectedRent);


    // const handleSubmit = (id, newRent) => {
    //     dispatch(editRent(id, newRent));
    //     onClose();
    // };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:4555/update/${listing._id}`, {
                expectedRent: newRent,
            });
            if (response.status === 200) {
                dispatch(editRent(listing._id, newRent)); // Update Redux store if needed
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

