import React from 'react';
import './Popup.css';

function Popup({ message, onCancel, onConfirm }) {
    return (
        <div className="PopupOverlay">
            <div className="Popup">
                <p>{message}</p>
                <div className="PopupButtons">
                    <button className="CancelButton" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="PopupDeleteButton" onClick={onConfirm}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
