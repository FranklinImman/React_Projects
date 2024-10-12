import { useEffect, useState } from "react";
import './style.css';

function FilterCards() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSelectedItem, setCurrentSelectedItem] = useState('');

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products', {
                method: 'GET',
            });
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setLoading(false);
                setProducts(data.products);
                setFilteredProducts(data.products); // Show all products initially
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if (currentSelectedItem !== '') {
            const filtered = products.filter(product =>
                product.category.toLowerCase() === currentSelectedItem.toLowerCase()
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [currentSelectedItem, products]);

    if (loading) {
        return <p>Fetching details, please wait...</p>;
    }

    const uniqueCategory = products.length > 0 
        ? [...new Set(products.map(product => product.category))] 
        : [];

    return (
        <div className="container1">
            <h1>Filter Products by Category</h1>
            <div className="filteredProducts">
            <ul>
                {uniqueCategory.length > 0 ? uniqueCategory.map((category, index) => (
                    <li key={index}>
                        <button onClick={() => setCurrentSelectedItem(currentSelectedItem !== '' && currentSelectedItem === category? '':category)} className={currentSelectedItem === category ? 'active' : ''}>
                            {category}
                        </button>
                    </li>
                )) : null}
            </ul>
            </div>
          
            <ul className="list-of-products">
                {filteredProducts.length > 0 ? filteredProducts.map(product => (
                    <li key={product.id}>
                        <p>{product.title}</p>
                        <button>{product.category}</button>
                    </li>
                )) : <p>No products available</p>}
            </ul>
        </div>
    );
}

export default FilterCards;
