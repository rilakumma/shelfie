import React, {Component} from 'react';
import Product from '../Product/Product';
import './Dashboard.css';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super();
        this.deleteProduct=this.deleteProduct.bind(this);
    }
    deleteProduct(id){
        axios.delete(`/api/inventory/${id}`).then(()=>{
          this.props.getProducts();
        })
      }

    render(){
    const showInventory = this.props.inventory.map(product=>{
        return(
            <div className='inventory'>
            <Product name={product.name} price={product.price} imgurl={product.imgurl} deleteProduct={this.deleteProduct}  id={product.product_id}/>
            </div>
        )
    });


        return(
            <div>
            {showInventory}
            </div>
        );
}
}
