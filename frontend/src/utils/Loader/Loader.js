// Loader.js
import React from 'react';
import './Loader.css'; // Ensure you have this CSS file for styling

const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader"></div>
            <div className="project-name">eGovConnect</div>
        </div>
    );
};

export default Loader;
