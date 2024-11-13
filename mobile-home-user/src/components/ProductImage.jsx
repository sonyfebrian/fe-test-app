

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProductImage({ imageUrl, }) {
    return (
        <div className="relative w-full h-96 rounded-[21px]" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 153, 238, 0), rgba(59, 151, 203, 1)), url(${imageUrl})` }}>

            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
                <Link to="/" >
                    <button

                        className="p-2 rounded-full bg-trasparent  transition-colors"
                    >
                        <ChevronLeft className="w-[18px] h-[29px] text-[#2D9CDB]" />
                    </button>
                </Link>

            </div>

        </div>
    );
}
