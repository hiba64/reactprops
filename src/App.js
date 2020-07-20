import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './ProductTable.js'


function App() {
        const products=[{category: "Electronics", price: 500, name: "samsung"},
        {category: "Electronics", price: 100, name: "nokia" }]
        return ( <ProductTable table={products}/>)
}

export default App;
