import React, { useState } from 'react';

function PopupEdit({ listing, onClose, onUpdate }) {
    const [editedTitle, setEditedTitle] = useState(listing.name);
    const [editedDescription, setEditedDescription] = useState(listing.description);

    const handleEditSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:4555/update/${listing.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: editedTitle,
                    description: editedDescription,
                }),
            });

            if (response.ok) {
                onUpdate(); // Trigger data refresh
            } else {
                throw new Error('Failed to update listing');
            }
        } catch (error) {
            console.error('Update error:', error);
        }
    };

    return (
        <div className="PopupOverlay">
            <div className="Popup">
                <h2>Edit Listing</h2>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />
                </div>
                <div className="PopupButtons">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleEditSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default PopupEdit;
