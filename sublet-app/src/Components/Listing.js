import React from 'react';
import './Listing.css';

function Listing({ listing, onDeleteClick }) {
    const { name, contact, residenceArea, roomType, expectedRent, description, image } = listing;

    return (
        <div className="Listing">
            <div className="ListingInfo">
                <h2>{name}</h2>
                <p>Contact: {contact}</p>
                <p>Residence Area: {residenceArea}</p>
                <p>Room Type: {roomType}</p>
                <p>Expected Rent: {expectedRent}</p>
                <p>Description: {description}</p>
            </div>
            <div className="ListingImage">
                {image && <img src={URL.createObjectURL(image)} alt="Listing" />}
            </div>
<button className="DeleteButton" onClick={onDeleteClick}>
    Delete
</button>
        </div>
    );
}

export default Listing;





