// import React, { useState } from 'react';
// import './PopupEdit.css';
//
// function PopupEdit({ listing, onClose, onUpdate }) {
//     const [editedTitle, setEditedTitle] = useState(listing.name);
//     const [editedDescription, setEditedDescription] = useState(listing.description);
//
//     const handleEditSubmit = async () => {
//         try {
//             const response = await fetch(`http://localhost:4555/update/${listing.id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: editedTitle,
//                     description: editedDescription,
//                 }),
//             });
//
//             if (response.ok) {
//                 onUpdate(); // Trigger data refresh
//             } else {
//                 throw new Error('Failed to update listing');
//             }
//         } catch (error) {
//             console.error('Update error:', error);
//         }
//     };
//
//     return (
//         <div className="PopupOverlay">
//             <div className="Popup">
//                 <h2>Edit Listing</h2>
//                 <div>
//                     <label>Title:</label>
//                     <input
//                         type="text"
//                         value={editedTitle}
//                         onChange={(e) => setEditedTitle(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         value={editedDescription}
//                         onChange={(e) => setEditedDescription(e.target.value)}
//                     />
//                 </div>
//                 <div className="PopupButtons">
//                     <button onClick={onClose}>Cancel</button>
//                     <button onClick={handleEditSubmit}>Submit</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default PopupEdit;

import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { editRent } from '../Redux/actions';
import './PopupEdit.css';
import axios from "axios";


function EditRentPopupForm({ listing, onClose }) {
    const dispatch = useDispatch();
    const [newRent, setNewRent] = useState(listing.expectedRent);


    // const handleSubmit = (id, newRent) => {
    //     dispatch(editRent(id, newRent));
    //     onClose();
    // };

    const handleSubmit = async () => {
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

