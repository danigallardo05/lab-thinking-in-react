import React from 'react';


import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {

    const [products, setProducts] = useState(jsonData);
    const [filteredProducts, setFilteredProducts] = useState(jsonData);


    const searchFunction = e => {
        const newProductList = products.filter(singleProduct => {
            
            return (
                singleProduct.name.toLowerCase().includes(e.toLowerCase())
            );
        })
        setFilteredProducts(newProductList);
        console.log(newProductList)
    }




    return (
        <div>
            <h1>IronStore</h1>

            <SearchBar handleSearch={searchFunction}/>

            <hr />
            <ProductTable productsArr={filteredProducts}/>



        </div>
    )
}

export default ProductsPage;
