import React from 'react';
import { Minus, Plus } from 'lucide-react';

function QuantitySelector({ quantity, onIncrement, onDecrement }) {
    return (
        <div className="flex items-center justify-center gap-4 mt-9">
            <button
                onClick={onDecrement}
                disabled={quantity <= 1}
                className="rounded-full bg-gray-300 text-blue-200 transition-colors disabled:cursor-not-allowed"
            >
                <Minus className="w-9 h-9" />
            </button>
            <span className="text-xl border border-blue-400 font-semibold w-[106px] h-[55px] rounded-md text-center bg-white flex items-center justify-center">
                {quantity}
            </span>
            <button
                onClick={onIncrement}
                className="p-2 rounded-full bg-blue-700 text-blue-200 hover:bg-blue-100 transition-colors"
            >
                <Plus className="w-5 h-5" />
            </button>
        </div>
    );
}

export default QuantitySelector;