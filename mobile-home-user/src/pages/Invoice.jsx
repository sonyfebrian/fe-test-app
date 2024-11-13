import React, { useEffect, useState } from 'react'
import OrderItem from '../components/OrderItem'
import { ChevronLeft, } from 'lucide-react'
import { Link } from 'react-router-dom'
import IconChat from '../assets/chat_alt.png'
import { getUserInfo, getAllProduct } from '../services/api'

const Invoice = () => {
    const [userInfo, setUserInfo] = useState([]);
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUserInfo();
            setUserInfo(data);
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getAllProduct();
            setAllProduct(data);
        };
        fetchProduct();
    }, []);


    return (
        <>
            <div className="min-h-screen  bg-gray-50  items-center justify-center px-4 font-roboto">
                <Link to={'/'}>
                    <button className="hover:bg-blue-600/30 py-10 rounded-lg transition-colors">
                        <ChevronLeft className="w-[59px] h-[59px] text-[#2D9CDB]" />
                    </button>
                </Link>
                <div className=" max-w-md bg-white rounded-3xl shadow-lg overflow-hidden mx-auto">
                    {/* Header */}
                    <div className="bg-[#0099EE] text-white p-6">
                        <h1 className="text-[25px] font-bold text-center mt-2">ORDER SUMMARY</h1>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                        {/* Customer Info */}
                        <p className="text-[#0099EE] text-sm text-right">ORDER #21340</p>
                        <div className="space-y-2 ">
                            <h2 className="font-bold text-gray-900 text-[15px]">{userInfo.name}</h2>
                            <p className="text-gray-500 text-sm">123 Fair Park</p>
                            <p className="text-gray-500 text-sm">12345, Singapore</p>
                        </div>

                        {/* Order Items */}
                        <div className="space-y-1">
                            {allProduct.slice(0, 3).map(product => (
                                <OrderItem
                                    key={product.id}
                                    qty={product.stock}
                                    image={product.image}
                                    title={product.name}
                                    price={product.price * product.stock}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#0099EE] p-4 rounded-b-lg text-white">
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-[15px]">TOTAL ORDER</span>
                            <span className="text-[18px] font-bold">
                                $ {allProduct.slice(0, 3).reduce((total, product) => total + (product.price * product.stock), 0).toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>

                <button className="w-full max-w-md my-10 mx-auto bg-[#56E4A0] hover:bg-emerald-600 text-white py-4 rounded-2xl font-bold transition-colors flex items-center justify-center gap-2 group text-[15px]">
                    <img src={IconChat} alt="Icon Chat" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    WHATSAPP US
                </button>
            </div>
        </>
    )
}

export default Invoice