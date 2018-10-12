import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Product from './components/Product/Product';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      inventory:[]
    }
  }
  componentDidMount(){
    axios.get('/api/inventory').then(res=>{
      console.log(res)
      this.setState({ inventory: res.data })
    });
  }
  render() {
    const {inventory, name, price, imgurl} = this.state;
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={inventory}>
          <Product />
        </Dashboard>
        <Form />
      </div>
    );
  }
}

export default App;
