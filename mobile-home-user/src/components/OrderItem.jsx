import { Shirt, } from 'lucide-react';
import React from 'react'

const OrderItem = ({ title, price, image, qty }) => {
    return (
        <div className="flex items-center justify-between py-3 border-b border-[#3B97CB] font-roboto">
            <div className="flex items-center gap-3">
                <div className="bg-blue-100/30 p-2 rounded-lg ">

                    <img src={image} alt={title} className="w-5 h-5 text-blue-500" />
                </div>
                <div className="grid grid-rows-2">

                    <span className="text-[#525252] text-sm font-medium">{title}</span>
                    <span className="text-[#0099EE] text-[11px]">QTY: {qty}</span>
                </div>

            </div>
            <div className="grid grid-rows-2 text-center">
                <span className="text-[#535353] font-medium text-[9px]">Total</span>
                <span className="font-semibold text-[#0099EE] text-sm">$ {price.toFixed(2)}</span>
            </div>

        </div>
    )
}

export default OrderItem