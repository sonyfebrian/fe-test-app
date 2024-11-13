import React, { useState, useEffect } from 'react'
import { ProductImage } from '../components/ProductImage'
import QuantitySelector from '../components/QuantitySelector'

import { useParams } from 'react-router-dom'
import { getDetailProduct, getProductCategories } from '../services/api'


const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);

    const { productId } = useParams();

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await getDetailProduct(productId);
            setProduct(productData);

            if (productData) {
                const categoryData = await getProductCategories(productData.category_id);
                setCategoryProducts(categoryData);
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <div className="min-h-screen bg-[#E7F5FD]">
            <div className="max-w-md mx-auto bg-[#E7F5FD] pb-8">
                <ProductImage imageUrl={product?.image} />
                <div className="px-6 pt-6">
                    {categoryProducts.filter(item => Number(item.id) === Number(product?.category_id)).map((item, index) => (
                        <span key={index} className="bg-[#CAECFF] text-[#0099EE] text-xs font-medium me-2 px-2.5 py-1.5 rounded ">{item.name}</span>
                    ))}
                    <p className="text-4xl font-bold text-[#3B97CB] mt-[14px]">{product?.name}</p>
                    <p className="text-[27px] font-bold text-[#3B97CB] ">$ {product?.price}/PC</p>
                    <p className="text-[16px] font-bold text-[#838383] mt-[14px]">{product?.description}</p>
                    <QuantitySelector
                        quantity={quantity}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail