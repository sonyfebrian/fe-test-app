import React from 'react';


function BalanceCard({ balance }) {
    return (
        <div className="relative w-full max-w-md mx-auto overflow-hidden top-20 font-roboto">
            <div className="relative bg-[#FFFFFF] rounded-3xl  p-6 h-48 ">
                {/* Half circle in the corner */}
                <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#0099EE] rounded-full" />
                {/* Small decorative dot */}
                <div className="absolute top-5 left-32 w-[29px] h-[29px] bg-red-400 rounded-full" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-end justify-end mr-4">
                    <div className="space-y-1">
                        <h2 className="text-[#535353] text-lg font-medium">Your Balance</h2>
                        <div className="flex items-baseline gap-1">
                            <span className="text-[#0099EE] text-4xl font-bold">$</span>
                            <span className="text-[#0099EE] text-4xl font-bold tracking-tight">
                                {balance.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    {/* Card decoration */}

                </div>
            </div>
        </div>
    );
}

export default BalanceCard;