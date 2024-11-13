import axios from 'axios';
import Swal from 'sweetalert2'

const apiEndpoint = 'https://belaundry-api.sebaris.link/platform/product';
const getUserInfoApi = 'https://belaundry-api.sebaris.link/platform/user/info';
const getFindProductApi = 'https://belaundry-api.sebaris.link/platform/product/91';
const getProductCategoriesApi = 'https://belaundry-api.sebaris.link/platform/product/categories';

const getProductCategories = async () => {
    try {
        const response = await axios.get(getProductCategoriesApi, {
            headers: {
                token: token,
            },
        });
        return response.data.response;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTAzNTc4Mzd9.ILF698ktm1Zw_ssLXsmCAMAGEz3_LIVA3_XWXcHWK0k';


const getDetailProduct = async (id) => {
    const productDetailApi = `https://belaundry-api.sebaris.link/platform/product/${id}`;
    try {
        const response = await axios.get(productDetailApi, {
            headers: {
                token: token,
            },
        });
        return response.data.response;
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return null;
    }
};

const getUserInfo = async () => {
    try {
        const response = await axios.get(getUserInfoApi, {
            headers: {
                token: token,
            },
        });
        return response.data.response;
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return null;
    }
};

const getFindProduct = async () => {
    try {
        const response = await axios.get(getFindProductApi, {
            headers: {
                token: token,
            },
        });
        return response.data.response;
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return null;
    }
};

const getAllProduct = async () => {
    try {
        const response = await axios.get(apiEndpoint, {
            headers: {
                token: token,
            },
        });
        return response.data.response;
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return null;
    }
};


const createProduct = async (data) => {
    try {
        const response = await axios.post('https://belaundry-api.sebaris.link/platform/product', data, {
            headers: {
                token: token,
            },
        });
        Swal.fire({
            title: 'Success!',
            text: 'Data has been added',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        return response.data.response;
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return null;
    }
};




export { getProductCategories, getAllProduct, createProduct, getFindProduct, getUserInfo, getDetailProduct };