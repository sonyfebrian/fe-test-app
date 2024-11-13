import React from 'react';
import { ShoppingBag } from 'lucide-react';

function AddToCartButton({ price, onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 group"
        >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Add to Cart - ${price.toFixed(2)}</span>
        </button>
    );
}

export default AddToCartButton;