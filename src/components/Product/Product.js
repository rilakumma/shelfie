import React from 'react';

export default function (props){
    return(
        <div className='productBox'>
        <div>Product</div>
        <div>{props.name}</div>
        <div>{props.price}</div>
        <img src={props.imgurl} />
        <button className='delete' onClick={()=> props.deleteProduct(props.id)}>Delete</button>
        </div>
    )
}