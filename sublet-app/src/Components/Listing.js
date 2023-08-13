
import React, { useState } from 'react';
import './Listing.css';
import EditRentPopupForm from './EditRentPopupForm';


function Listing({ listing, onDeleteClick }) {
    const [showEditPopup, setShowEditPopup] = useState(false);

    const { _id, name, contact, residenceArea, roomType, expectedRent,  description, image } = listing;

    const handleEditRentClick = () => {
        setShowEditPopup(true);
    };

    return (
        <div className="Listing">
            <div className="ListingInfo">
                <h2>{name}</h2>
                <p>Contact: {contact}</p>
                <p>Residence Area: {residenceArea}</p>
                <p>Room Type: {roomType}</p>
                <p>Rent: {expectedRent}</p>
                <p>Description: {description}</p>
            </div>
            <div className="ListingImage">
                {residenceArea === 'Marine Drive' && (
                    <img src="https://vancouver.housing.ubc.ca/wp-content/uploads/2014/01/Res_detail_MD_exterior1_1170x660.jpg" alt="Listing" />
                )}
                {residenceArea === 'Ponderosa  Common' && (
                    <img src="https://rha.housing.ubc.ca/wp-content/uploads/2018/08/Screen-Shot-2018-08-08-at-6.11.02-PM.png" alt="Listing" />
                )}
                {residenceArea === 'Exchange Residence' && (
                    <img src="https://vancouver.housing.ubc.ca/wp-content/uploads/2023/04/exchange-courtyard.png" alt="Listing" />
                )}
                {residenceArea === 'Brock Commons' && (
                    <img src="https://vancouver.housing.ubc.ca/wp-content/uploads/2017/09/Brock-Commons-Tallwood-House–web.jpg" alt="Listing" />
                )}
                {residenceArea === 'Thunderbird Residence' && (
                    <img src="https://vancouver.housing.ubc.ca/wp-content/uploads/2014/03/Res_detail_TB_exterior2_720x480.jpg" alt="Listing" />
                )}
                {residenceArea === 'Pacific Residence' && (
                    <img src="https://www.ubcproperties.com/wp-content/uploads/2020/01/UBC-Pacific-Residence-Student-Union-Blvd-corner-view_1200x677-1200x680-1.jpg" alt="Listing" />
                )}
            </div>
            <div>
                <button className="DeleteButton" onClick={onDeleteClick}>
                    Delete
                </button>
                <button className="EditButton" onClick={handleEditRentClick}>
                    Edit Rent
                </button>
            </div>
            {showEditPopup && (
                <EditRentPopupForm listing={listing} onClose={() => setShowEditPopup(false)} />
            )}
        </div>

    );
}

export default Listing;




