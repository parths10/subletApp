// Filter.js
import React from 'react';

function Filter({ residenceAreas, selectedResidence, onSelectResidence }) {
    return (
        <div>
            <select value={selectedResidence} onChange={onSelectResidence}>
                <option value="">All Residence Areas</option>
                {residenceAreas.map((area) => (
                    <option key={area} value={area}>
                        {area}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
