import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { getAllProduct, getUserInfo } from '../services/api'
import { User } from 'lucide-react'
const Home = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [userInfo, setUserInfo] = useState({});


    // Sample data for top selling products
    const topProducts = [
        { name: 'Item A', value: '$120.00' },
        { name: 'Item B', value: '$85.00' },
        { name: 'Item C', value: '$76.00' },
    ];

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getAllProduct();
            setAllProduct(data);
        };
        fetchProduct();
    }, []);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const data = await getUserInfo();
            setUserInfo(data);
        };
        fetchUserInfo();
    }, []);


    return (
        <>
            <div className="flex justify-between items-center mb-8 bg-[#FFFFFF] h-[97px] p-8">
                <h1 className="text-2xl font-semibold hidden md:block">Home</h1>
                <div className="relative block md:hidden">

                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                        <div className="w-8 h-8 bg-[#0099EE] rounded-full" />
                    </div>


                    <div className="absolute w-3 h-3 -top-1 -right-4 bg-white rounded-full flex items-center justify-center">

                        <div className="w-2 h-2 bg-[#F36868] rounded-full" />
                    </div>


                </div>
                <div className="flex items-center gap-2 ">
                    <User size={20} className='hidden md:block' />
                    <span className='underline text-[#0099EE] hidden md:block'>{userInfo.name}</span>
                </div>
            </div>
            <div className='p-8 font-roboto'>
                <Card className="mb-8 bg-white">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle>Product Sold</CardTitle>
                            <select className="border rounded p-1 text-sm">
                                <option>This week</option>
                                <option>Last week</option>
                                <option>This month</option>
                            </select>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={allProduct}>
                                    <XAxis
                                        dataKey="created_at"
                                        tickFormatter={(value) =>
                                            new Intl.DateTimeFormat('en-US', {
                                                day: '2-digit',
                                                month: '2-digit',
                                            }).format(new Date(value))
                                        }
                                    />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="total" fill="#3E7DAB" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white md:w-[381px] ">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle>Top selling product</CardTitle>
                            <select className="border rounded p-1 text-sm">
                                <option>This week</option>
                                <option>Last week</option>
                                <option>This month</option>
                            </select>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {topProducts.map((product, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <span className="text-gray-600">{product.name}</span>
                                    <span className="font-medium">{product.value}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

            </div>
        </>
    )
}

export default Home