import React from 'react'
import { Home, FolderOpen, TrendingUp, Settings, User } from 'lucide-react'
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <>
            <div className="hidden md:block md:w-64 bg-[#2D9CDB] text-white p-6">
                <div className="flex items-center gap-2 mb-8">

                    <div className="relative">

                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                            <div className="w-8 h-8 bg-[#0099EE] rounded-full" />
                        </div>


                        <div className="absolute w-3 h-3 -top-1 -right-4 bg-white rounded-full flex items-center justify-center">

                            <div className="w-2 h-2 bg-[#F36868] rounded-full" />
                        </div>


                    </div>

                    <span className="text-xl font-semibold">BeLaundry</span>
                </div>

                <nav className="space-y-2">
                    <Link to="/">
                        <button className="flex items-center gap-3 w-full p-3 hover:bg-[#FFFFFF] hover:text-[#3B97CB]  rounded-lg">
                            <Home size={20} />
                            <span>Home</span>
                        </button>
                    </Link>
                    <Link to="add-product">
                        <button className="flex items-center gap-3 w-full p-3 hover:bg-[#FFFFFF] hover:text-[#3B97CB] rounded-lg">
                            <FolderOpen size={20} />
                            <span>Products</span>
                        </button>
                    </Link>
                    <button className="flex items-center gap-3 w-full p-3 hover:bg-[#FFFFFF] hover:text-[#3B97CB] rounded-lg">
                        <TrendingUp size={20} />
                        <span>Sales</span>
                    </button>
                    <button className="flex items-center gap-3 w-full p-3 hover:bg-[#FFFFFF] hover:text-[#3B97CB] rounded-lg">
                        <Settings size={20} />
                        <span>Settings</span>
                    </button>
                </nav>
            </div>
        </>
    )
}

export default Sidebar