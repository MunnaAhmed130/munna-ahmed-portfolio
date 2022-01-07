import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Footer2.css'

const Footer2 = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
            </div>
        </div>
    );
};

export default Footer2;