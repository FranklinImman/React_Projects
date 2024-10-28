import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import setProducts from '../redux/actions/ProductACtion'

const ProductList = () => {

    const dispatch = useDispatch();

  const fetchproducts = async()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((Error)=>{
        console.log(Error);
      })
      console.log(response.data);
      
      dispatch(setProducts(response.data));
      
  }

  useEffect(()=>{
    fetchproducts();
    },[])

  

  return (
    <div className="container p-5">
        <div className='row'>
        <ProductComponent/>
        </div>
        
    </div>
  );
};

export default ProductList;
