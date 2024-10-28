import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allproduct.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="col-md-3 mb-5 d-flex align-items-stretch" key={id}>
        <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card h-100 p-3" style={{ borderRadius: '10px', cursor: 'pointer' }}>
            <img src={image} className="card-img-top img-fluid" alt={title} style={{ height: '20rem', padding: '1rem' }} />
            <div className="card-body">
              <h5 className="card-title text-start">{title}</h5>
              <p className="card-text text-start fw-bold">Price: ${price}</p>
              <p className="card-text text-start text-secondary">{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
