import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            price:0,
            imgurl:''
        }
        this.eraseInput = this.eraseInput.bind(this);
    }

    inputName(val){
        this.setState({ name: val })
    }
    inputPrice(val){
        this.setState({ price: val })
    }
    inputImg(val){
        this.setState({ imgurl: val })
    }
    eraseInput(){
        this.setState({ name: '', price:0, imgurl:'' })
    }
    postProduct(){
        axios.post('/api/inventory').then(res=>{
            console.log(res)
        })
    }

    render(){
        const {eraseInput} = this.state;
        return(
            <div>
                <div>Form</div>
                <input onChange={(e)=> this.inputName(e.target.value)} />
                <input onChange={(e)=> this.inputPrice(e.target.value)} />
                <input onChange={(e)=> this.inputImg(e.target.value)} />
                <button className='cancel' onClick={eraseInput}>CANCEL</button>
                <button className='add' >ADD TO INVENTORY</button>
            </div>
        )
    }
}
export default Form;