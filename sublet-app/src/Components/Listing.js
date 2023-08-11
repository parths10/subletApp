// import React from 'react';
// import './Listing.css';
//
// function Listing({listing, onDeleteClick}) {
//     const {name, contact, residenceArea, roomType, expectedRent, description, image} = listing;
//
//     return (
//         <div className="Listing">
//             <div className="ListingInfo">
//                 <h2>{name}</h2>
//                 <p>Contact: {contact}</p>
//                 <p>Residence Area: {residenceArea}</p>
//                 <p>Room Type: {roomType}</p>
//                 <p>Expected Rent: {expectedRent}</p>
//                 <p>Description: {description}</p>
//             </div>
//             <div className="ListingImage">
//                 {image && <img src={URL.createObjectURL(image)} alt="Listing"/>}
//             </div>
//             <button className="DeleteButton" onClick={onDeleteClick}>
//                 Delete
//             </button>
//         </div>
//     );
// }
//
// export default Listing;
//
//
// import React, { useState } from 'react';
// import './Listing.css';
//
// function Listing({ listing, onDeleteClick, onEditClick }) {
//     const [editing, setEditing] = useState(false);
//     const [editedFields, setEditedFields] = useState({
//         name: listing.name,
//         contact: listing.contact,
//         residenceArea: listing.residenceArea,
//         roomType: listing.roomType,
//         expectedRent: listing.expectedRent,
//         description: listing.description,
//     });
//
//     const { name, contact, residenceArea, roomType, expectedRent, description, image } = editedFields;
//
//     const handleEditClick = () => {
//         setEditing(true);
//     };
//
//     const handleCancelEdit = () => {
//         setEditing(false);
//         setEditedFields({
//             name: listing.name,
//             contact: listing.contact,
//             residenceArea: listing.residenceArea,
//             roomType: listing.roomType,
//             expectedRent: listing.expectedRent,
//             description: listing.description,
//         });
//     };
//
//     const handleSubmitEdit = () => {
//         // Make PUT request to /update/id API with editedFields
//         // Update the fields in the server and then setEditing(false);
//         // You need to implement the PUT request in your component
//     };
//
//     return (
//         <div className="Listing">
//             <div className="ListingInfo">
//                 {editing ? (
//                     <form>
//                         <input type="text" value={name} onChange={(e) => setEditedFields({ ...editedFields, name: e.target.value })} />
//                         {/* Add similar input fields for other fields */}
//                     </form>
//                 ) : (
//                     <>
//                         <h2>{name}</h2>
//                         <p>Contact: {contact}</p>
//                         <p>Residence Area: {residenceArea}</p>
//                         <p>Room Type: {roomType}</p>
//                         <p>Expected Rent: {expectedRent}</p>
//                         <p>Description: {description}</p>
//                     </>
//                 )}
//             </div>
//             <div className="ListingImage">
//                 {image && <img src={URL.createObjectURL(image)} alt="Listing" />}
//             </div>
//             {editing ? (
//                 <div>
//                     <button onClick={handleSubmitEdit}>Save</button>
//                     <button onClick={handleCancelEdit}>Cancel</button>
//                 </div>
//             ) : (
//                 <div>
//                     <button onClick={handleEditClick}>Edit</button>
//                     <button className="DeleteButton" onClick={onDeleteClick}>
//                         Delete
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }
//
// export default Listing;
//
//
// import React, { useState } from 'react';
// import './Listing.css';
//
// function Listing({ listing, onDeleteClick, onEditExpectedRent }) {
//     const [editing, setEditing] = useState(false);
//     const [editedExpectedRent, setEditedExpectedRent] = useState(listing.expectedRent);
//
//     const handleEditClick = () => {
//         setEditing(true);
//     };
//
//     const handleCancelEdit = () => {
//         setEditing(false);
//         setEditedExpectedRent(listing.expectedRent);
//     };
//
//     const handleSubmitEdit = () => {
//         // Make PUT request to update expectedRent
//         // Update the field in the server and then setEditing(false);
//         // You need to implement the PUT request in your component
//         onEditExpectedRent(listing.id, editedExpectedRent);
//         setEditing(false);
//     };
//
//     return (
//         <div className="Listing">
//             <div className="ListingInfo">
//                 <h2>{listing.name}</h2>
//                 <p>Contact: {listing.contact}</p>
//                 <p>Residence Area: {listing.residenceArea}</p>
//                 <p>Room Type: {listing.roomType}</p>
//                 {editing ? (
//                     <input
//                         type="text"
//                         value={editedExpectedRent}
//                         onChange={(e) => setEditedExpectedRent(e.target.value)}
//                     />
//                 ) : (
//                     <p>Expected Rent: {listing.expectedRent}</p>
//                 )}
//                 <p>Description: {listing.description}</p>
//             </div>
//             <div className="ListingImage">
//                 {listing.image && <img src={URL.createObjectURL(listing.image)} alt="Listing" />}
//             </div>
//             {editing ? (
//                 <div>
//                     <button onClick={handleSubmitEdit}>Save</button>
//                     <button onClick={handleCancelEdit}>Cancel</button>
//                 </div>
//             ) : (
//                 <div>
//                     <button onClick={handleEditClick}>Edit Expected Rent</button>
//                     <button className="DeleteButton" onClick={onDeleteClick}>
//                         Delete
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }
//
// export default Listing;


// import React, { useState } from 'react';
// import './Listing.css';
//
// function Listing({ listing, onDeleteClick }) {
//     const [editingExpectedRent, setEditingExpectedRent] = useState(false);
//     const [editedExpectedRent, setEditedExpectedRent] = useState(listing.expectedRent);
//
//     const { name, contact, residenceArea, roomType, description, image } = listing;
//
//     const handleEditExpectedRent = () => {
//         setEditingExpectedRent(true);
//     };
//
//     // Function to update the expectedRent field for a listing
//     const updateExpectedRent = async (listingId, newExpectedRent) => {
//         try {
//             const response = await fetch(`/update/${listingId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     expectedRent: newExpectedRent,
//                 }),
//             });
//
//             if (response.ok) {
//                 const updatedListing = await response.json();
//                 return updatedListing;
//             } else {
//                 throw new Error('Failed to update expected rent');
//             }
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     };
//
//     const handleSaveExpectedRent = async () => {
//         try {
//             const updatedListing = await updateExpectedRent(listing.id, editedExpectedRent);
//             // Update the local state or Redux store with the updated listing if needed
//             setEditingExpectedRent(false);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     return (
//         <div className="Listing">
//             <div className="ListingInfo">
//                 <h2>{name}</h2>
//                 <p>Contact: {contact}</p>
//                 <p>Residence Area: {residenceArea}</p>
//                 <p>Room Type: {roomType}</p>
//                 {editingExpectedRent ? (
//                     <input
//                         type="text"
//                         value={editedExpectedRent}
//                         onChange={(e) => setEditedExpectedRent(e.target.value)}
//                     />
//                 ) : (
//                     <p>Expected Rent: {editedExpectedRent}</p>
//                 )}
//                 <p>Description: {description}</p>
//             </div>
//             <div className="ListingImage">
//                 {image && <img src={URL.createObjectURL(image)} alt="Listing" />}
//             </div>
//             <div>
//                 {editingExpectedRent ? (
//                     <>
//                         <button onClick={handleSaveExpectedRent}>Save</button>
//                         <button onClick={() => setEditingExpectedRent(false)}>Cancel</button>
//                     </>
//                 ) : (
//                     <button onClick={handleEditExpectedRent}>Edit Expected Rent</button>
//                 )}
//                 <button className="DeleteButton" onClick={onDeleteClick}>
//                     Delete
//                 </button>
//             </div>
//         </div>
//     );
// }
//
// export default Listing;

import React, { useState } from 'react';
import './Listing.css';

function Listing({ listing, onDeleteClick }) {
    const [editingExpectedRent, setEditingExpectedRent] = useState(false);
    const [editedExpectedRent, setEditedExpectedRent] = useState(listing.expectedRent);

    const { _id, name, contact, residenceArea, roomType, description, image } = listing;

    const handleEditExpectedRent = () => {
        setEditingExpectedRent(true);
    };

    // Function to update the expectedRent field for a listing
    const updateExpectedRent = async (listingId, newExpectedRent) => {
        try {
            const response = await fetch(`http://localhost:4555/update/${listingId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    expectedRent: newExpectedRent,
                }),
            });

            if (response.ok) {
                const updatedListing = await response.json();
                return updatedListing;
            } else {
                throw new Error('Failed to update expected rent');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const handleSaveExpectedRent = async () => {
        try {
            const updatedListing = await updateExpectedRent(_id, editedExpectedRent);
            // Update the local state or Redux store with the updated listing if needed
            setEditingExpectedRent(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="Listing">
            <div className="ListingInfo">
                <h2>{name}</h2>
                <p>Contact: {contact}</p>
                <p>Residence Area: {residenceArea}</p>
                <p>Room Type: {roomType}</p>
                {editingExpectedRent ? (
                    <input
                        type="text"
                        value={editedExpectedRent}
                        onChange={(e) => setEditedExpectedRent(e.target.value)}
                    />
                ) : (
                    <p>Expected Rent: {editedExpectedRent}</p>
                )}
                <p>Description: {description}</p>
            </div>
            <div className="ListingImage">
                {image && <img src={URL.createObjectURL(image)} alt="Listing" />}
            </div>
            <div>
                {editingExpectedRent ? (
                    <>
                        <button onClick={handleSaveExpectedRent}>Save</button>
                        <button onClick={() => setEditingExpectedRent(false)}>Cancel</button>
                    </>
                ) : (
                    <button onClick={handleEditExpectedRent}>Edit Expected Rent</button>
                )}
                <button className="DeleteButton" onClick={onDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Listing;
