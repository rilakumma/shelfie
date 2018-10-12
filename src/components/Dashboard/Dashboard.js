import React from 'react';
import Product from '../Product/Product';
import './Dashboard.css';

export default function Dashboard(props) {
    const showInventory = props.inventory.map(product=>{
        return(
            <div className='inventory'>
            <Product name={product.name} price={product.price} imgurl={product.imgurl} />
            </div>
        )
    });
        return(
            <div>
            <div>Dashboard</div>
            {showInventory}
            </div>
        );
}
