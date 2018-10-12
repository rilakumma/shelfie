import React from 'react';

export default function (props){
    return(
        <div>
        <div>Product</div>
        <div>{props.name}</div>
        <div>{props.price}</div>
        <img src={props.imgurl} />
        </div>
    )
}