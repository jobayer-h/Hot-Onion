import React from 'react';
import BreakFirst from '../../images/breakfast1.png';
const ProductCard = () => {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="text-center product-card my-2">
                <img className="img-fluid" src={BreakFirst} alt="Red Onion Restarunts" />
                <h4>Item Name</h4>
                <small>Item Short Drescriptions</small>
                <h2>$<span>11.99</span></h2>
            </div>
        </div>
    );
};

export default ProductCard;