// import React, {useState} from 'react';
// import './ListingForm.css';
// import PopupForm from './PopupForm';
// import {connect} from 'react-redux';
// import { addListing } from '../Redux/actions';
// import axios from 'axios';
//
// function ListingForm({ onAddListing }) {
//     const [formData, setFormData] = useState({
//         name: '',
//         contact: '',
//         residenceArea: '',
//         roomType: '',
//         expectedRent: '',
//         description: '',
//         image: null,
//     });
//
//     const [showPopup, setShowPopup] = useState(false);
//
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };
//
//     const handleImageChange = (e) => {
//         setFormData({ ...formData, image: e.target.files[0] });
//     };
//
//
//     const postNew = (newPost) => {
//         console.log('item added');
//         axios.post('http://localhost:4555/insert', { name: formData.name, contact: formData.contact, residenceArea: formData.residenceArea, roomType: formData.roomType, expectedRent: formData.expectedRent, description: formData.description, image: null});
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onAddListing(formData);
//         setFormData({
//             name: '',
//             contact: '',
//             residenceArea: '',
//             roomType: '',
//             expectedRent: '',
//             description: '',
//             image: null,
//         });
//
//         const newPost = {
//             name, contact, residenceArea, roomType, expectedRent, description, image
//         };
//
//         postNew(newPost);
//
//         setShowPopup(false);
//     };
//
//     return (
//         <div className="ListingForm">
//             {showPopup && (
//                 <PopupForm
//                     formData={formData}
//                     handleChange={handleChange}
//                     handleImageChange={handleImageChange}
//                     handleSubmit={handleSubmit}
//                     onClose={() => setShowPopup(false)}
//                 />
//             )}
//             <button onClick={() => setShowPopup(true)}>Post</button>
//         </div>
//     );
// }
//
// export default connect(null, { onAddListing: addListing })(ListingForm);
//


import React, { useState } from 'react';
import './ListingForm.css';
import PopupForm from './PopupForm';
import { connect } from 'react-redux';
import { addListing } from '../Redux/actions';
import axios from 'axios';

function ListingForm({ onAddListing }) {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        residenceArea: '',
        roomType: '',
        expectedRent: '',
        description: '',
        image: null,
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e) => {
        setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4555/insert', formData);
            console.log('Item added:', response.data);

            // Assuming you have an action to update Redux store
            onAddListing(response.data);

            setFormData({
                name: '',
                contact: '',
                residenceArea: '',
                roomType: '',
                expectedRent: '',
                description: '',
                image: null,
            });

            setShowPopup(false);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className="ListingForm">
            {showPopup && (
                <PopupForm
                    formData={formData}
                    handleChange={handleChange}
                    handleImageChange={handleImageChange}
                    handleSubmit={handleSubmit}
                    onClose={() => setShowPopup(false)}
                />
            )}
            <button onClick={() => setShowPopup(true)}>Post</button>
        </div>
    );
}

export default connect(null, { onAddListing: addListing })(ListingForm);
