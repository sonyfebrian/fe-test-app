import { useState, useEffect } from 'react';
import { File } from 'lucide-react';

import BalanceCard from './components/BalanceCard';
import { getFindProduct, getAllProduct, getUserInfo } from './services/api';
import { Link } from 'react-router-dom';



function App() {

  const [findProduct, setFindProduct] = useState({});
  const [allProduct, setAllProduct] = useState([]);
  const [userInfo, setUserInfo] = useState({});



  useEffect(() => {
    const fetchData = async () => {
      const [findData, allData, userData] = await Promise.all([
        getFindProduct(), getAllProduct(), getUserInfo()
      ]);
      setFindProduct(findData);
      setAllProduct(allData);
      setUserInfo(userData);
    };
    fetchData();
  }, []);

  const sendalSwallowBiru = allProduct.filter(product => product.name === "Sendal Swallow Biru");
  const totalProductName = sendalSwallowBiru.length;
  const totalProductPrice = sendalSwallowBiru.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="min-h-screen max-w-md mx-auto bg-[#E7F5FD] font-roboto items-center justify-center">
      <div className="bg-[#F36868] w-full max-w-md p-6 pt-12 rounded-b-[2rem] text-white">
        <h1 className="text-2xl font-semibold">Welcome, {userInfo.name}</h1>
        <BalanceCard balance={200.00} />
      </div>

      <div className="p-6 mt-20 font-roboto">
        <h2 className="text-[#3B97CB] text-base font-bold mb-3">PREVIOUS ORDER</h2>
        <div className="bg-white rounded-xl shadow-sm mb-6 flex justify-between items-center">
          <div className="flex gap-4">
            <img src={findProduct.image} alt="Laundry Bag" className="w-16 h-16 rounded-lg object-cover" />
            <div>
              <h3 className="font-medium text-[#525252]">{findProduct.name}</h3>
              <p className="text-[#535353] text-[9px] font-normal">Total Order</p>
              <p className="text-[#0099EE] font-bold text-sm">${findProduct.price}</p>
            </div>
          </div>
          <Link to={`invoice/${findProduct.id}`}>
            <div className="w-24 h-24 rounded-r-lg bg-gradient-to-br from-[#0099EE] to-[#CAECFF] flex flex-col items-center justify-center">
              <File className='text-white w-[46px] h-[46px]' />
              <p className="text-white mt-2 uppercase font-medium">invoice</p>
            </div>
          </Link>
        </div>

        <h2 className="text-[#3B97CB] text-[15px] font-bold mb-3">YOUR MOST ORDERED</h2>
        <div className="rounded-xl relative shadow-sm mb-6" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 153, 238, 0), rgba(59, 151, 203, 1)), url('${sendalSwallowBiru[0]?.image}')`, height: '214px' }}>
          {sendalSwallowBiru[0] && <p className="font-bold text-white absolute bottom-0 left-0 text-[23px] mb-5 ml-2">{sendalSwallowBiru[0].name}</p>}
          <p className="font-medium text-white absolute bottom-0 left-0 ml-2">{totalProductName}x | total of $ {totalProductPrice}</p>
        </div>

        <h2 className="text-[#3B97CB] text-[15px] font-bold mb-3">OUR LATEST PRODUCT</h2>
        <div className="grid grid-cols-2 gap-4">
          {allProduct.slice(1, 3).map((product) => (
            <Link key={product.id} to={`product/${product.id}`}>
              <div className="relative rounded-md bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 153, 238, 0), rgba(59, 151, 203, 1)), url(${product.image ?? ''})`, height: '214px' }}>
                <p className="font-bold text-white absolute bottom-0 left-0 text-[23px] mb-5 ml-2">{product.name}</p>
                <p className="font-medium text-white absolute bottom-0 left-0 ml-2"> $ {product.price} /PC</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
