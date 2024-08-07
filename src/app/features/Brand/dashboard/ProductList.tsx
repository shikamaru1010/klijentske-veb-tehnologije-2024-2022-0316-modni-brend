// src/app/features/Product/ProductList.tsx
import  { useState } from 'react';
import Product from '../product/Product';

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = () => {
        const newProduct = new Product(1, "Example Product", 99.99, "Clothing");
        setProducts([...products, newProduct]);
    };

    return (
        <div>
            <h1>Products</h1>
            <button onClick={addProduct}>Add Product</button>
            <ul>
                {products.map(prod => (
                    <li key={prod.id}>
                        <h2>{prod.name}</h2>
                        <p>Price: ${prod.price}</p>
                        <p>Category: {prod.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
