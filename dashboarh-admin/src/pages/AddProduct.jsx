import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { User, X, BookImage, Image } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';
import { createProduct, getProductCategories, getUserInfo } from '../services/api';

const AddNewProduct = () => {
    const [categoryProduct, setCategoryProduct] = useState([]);
    const [files, setFiles] = useState([]);
    const [preview, setPreview] = useState(null);
    const [userInfo, setUserInfo] = useState({});
    const [data, setData] = useState({
        name: '',
        description: '',
        sku: '',
        stock: '',
        category_id: '',
        price: '',
        image: '',
    });

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles);
            if (acceptedFiles[0]) {
                const url = URL.createObjectURL(acceptedFiles[0]);
                setPreview(url);
            }
        },
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif']
        },
        maxFiles: 1
    });

    const removeFile = () => {
        setFiles([]);
        if (preview) {
            URL.revokeObjectURL(preview);
            setPreview(null);
        }
    };

    useEffect(() => {
        const fetchProductCategory = async () => {
            const data = await getProductCategories();
            setCategoryProduct(data);
        };
        fetchProductCategory();
    }, []);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const data = await getUserInfo();
            setUserInfo(data);
        };
        fetchUserInfo();
    }, []);

    const handleSubmitData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
        const response = await createProduct(formData);
        if (response) {
            setData({
                name: '',
                description: '',
                sku: '',
                stock: '',
                category_id: '',
                price: '',
                image: '',
            });
            removeFile();
        }
    };

    const handleChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <div className="flex justify-end items-center  bg-[#FFFFFF] h-[97px] p-8">
                <div className="flex items-center gap-2">
                    <User size={20} />
                    <span className='underline text-[#0099EE] font-roboto'>{userInfo.name}</span>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row bg-[#CAECFF]'>

                <Card className="border-none md:w-9/12 ">
                    <CardHeader>
                        <CardTitle>Add New Product</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmitData} className='text-[#3B97CB]'>
                            <label>
                                Name:
                                <input type="text" name="name" value={data.name} onChange={handleChange} className="w-full mb-[22px] border rounded px-3 py-2 text-gray-700 border-[#3B97CB] " />
                            </label>
                            <label>
                                Description:
                                <textarea type="text" name="description" value={data.description} onChange={handleChange} className="w-full border rounded px-3 py-2 text-gray-700 border-[#3B97CB]" />
                            </label>

                            <div className="flex gap-2 md:flex-row md:flex-nowrap flex-col">
                                <div className="md:w-[237px]">
                                    <label htmlFor="sku" className="block mb-1  border-[#3B97CB] mt-[22px]">
                                        SKU
                                    </label>
                                    <input
                                        name="sku"
                                        type="text"
                                        value={data.sku} onChange={handleChange}
                                        className="w-full  border rounded px-3 py-2 text-gray-700 border-[#3B97CB]"
                                    />
                                </div>
                                <div className="md:w-[237px] w-[116px]">
                                    <label htmlFor="stock" className="block mb-1 mt-[22px] ">
                                        Stock
                                    </label>
                                    <input
                                        name="stock"
                                        type="text"
                                        value={data.stock} onChange={handleChange}
                                        className="w-full border rounded px-3 py-2 text-gray-700 border-[#3B97CB]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="category" className="block mb-1 mt-[23px]">
                                    Category
                                </label>
                                <div className="grid grid-cols-2 gap-1 md:flex md:flex-wrap">
                                    {categoryProduct.map((item) => (
                                        <button
                                            type="button"
                                            key={item.id}
                                            onClick={() => setData({ ...data, category_id: item.id })}
                                            className={`px-4 py-2 rounded-[8.5px] transition-colors ${data.category_id === item.id
                                                ? 'bg-[#3B97CB] text-white'
                                                : 'bg-[#CAECFF] text-[#3B97CB] hover:bg-[#CAECFF]'
                                                }`}
                                        >
                                            {item.name}
                                        </button>
                                    ))}

                                </div>
                            </div>

                            <div className="col-span-2 flex  justify-between items-end">
                                <div>
                                    <label htmlFor="price" className="block mb-1 mt-[22px] ">
                                        Price
                                    </label>
                                    <div className="flex justify-between items-center">
                                        <input
                                            name="price"
                                            type="text"
                                            value={data.price} onChange={handleChange}
                                            className="border rounded px-3 py-2 text-gray-700 border-[#3B97CB] w-[237px]"
                                        />

                                    </div>

                                </div>
                                <button
                                    type="submit"
                                    onClick={() => {
                                        setData({
                                            name: '',
                                            description: '',
                                            sku: '',
                                            stock: '',
                                            category_id: '',
                                            price: '',
                                            image: '',
                                        });
                                        removeFile();
                                    }}
                                    className="hidden md:block bg-[#56E4A0] hover:bg-[#56E4A0] text-white font-medium py-2 px-4 rounded"
                                >
                                    Publish
                                </button>
                            </div>

                        </form>
                    </CardContent>
                </Card>

                <div className=" bg-[#E7F5FD] p-8  ">
                    <div className="w-full ">
                        <div className="bg-white rounded-xl shadow-lg p-8">


                            <div
                                {...getRootProps()}
                                className={twMerge(
                                    " rounded-lg p-8 transition-colors cursor-pointer",
                                    isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-blue-400",
                                    preview ? "border-none p-0" : ""
                                )}
                            >
                                <input {...getInputProps()} />

                                {preview ? (
                                    <div className="relative group">
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="w-full h-64 object-cover rounded-lg"
                                        />
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeFile();
                                            }}
                                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <div className="flex justify-center mb-4">
                                            {isDragActive ? (
                                                <BookImage className="h-16 w-16 text-blue-400" />
                                            ) : (
                                                <Image className="h-[171px] w-[171px] text-[#CAECFF]" />
                                            )}
                                        </div>



                                    </div>
                                )}
                            </div>
                            <p className="text-[20px]  text-[#3B97CB] underline mb-6 text-center">
                                Upload Image
                            </p>
                            {files.length > 0 && (
                                <div className="mt-6">
                                    <button
                                        className="w-full bg-blue-500 hover:bg-blue-600"
                                        onClick={() => {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setData((prevState) => ({
                                                    ...prevState,
                                                    image: reader.result,
                                                }));
                                            };
                                            reader.readAsDataURL(files[0]);
                                        }}
                                    >
                                        Upload Image
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        onClick={() => {
                            setData({
                                name: '',
                                description: '',
                                sku: '',
                                stock: '',
                                category_id: '',
                                price: '',
                                image: '',
                            });
                            removeFile();
                        }}
                        className="block md:hidden mt-[40px] w-full bg-[#56E4A0] hover:bg-[#56E4A0] text-white font-medium py-2 px-4 rounded"
                    >
                        Publish
                    </button>
                </div>

            </div>
        </>

    );
};

export default AddNewProduct;