import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeselectedProduct } from '../redux/actions/ProductACtion';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch(); 

    useEffect(() => {
        if (productId && productId !== "") {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
                    dispatch(selectedProduct(response.data));
                } catch (err) {
                    console.log(err);
                }
            };

            fetchProduct();
        }

        return () => {
            dispatch(removeselectedProduct());
        };
    }, [productId, dispatch]);

    // Destructure product details safely
    const { image, title, price, category, description } = product || {};

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <img src={image} alt={title} className="card-img-top img-fluid h-75" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card border-0 shadow-sm p-4">
                        <div className="card-body p-3">
                            <h2 className="card-title fw-bolder">{title || "Loading..."}</h2>
                            <h4 className="text-success">Price: ${price || "Loading..."}</h4>
                            <h4 className="text-muted text-capitalize container text-bg-info bg-body-secondary">
                                {category || "Loading..."}
                            </h4>
                            <p className="card-text text-start mt-3 text-secondary">
                                {description || "Loading..."}
                            </p>
                            <button className="btn btn-danger mt-3">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
