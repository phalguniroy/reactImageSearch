
import React, { Component } from 'react'
import BookList from './BookList'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
        total: 0
    }
}
handleTotal=(x)=>{
    if(x===1){
      this.setState({
        total: this.state.total + 1
    })
      }else{
        this.setState({
          total: this.state.total - 1
      })
    
}
}
// style={{display:"inline"}}
  render() {
    return (
      <div>
      <div id="container">
       <div id="left"></div>
       <div id="center"><p className="center styleText">
       Book Store cart
        </p></div>
        <div className="totalContainer">
        <img alt="cart" src="https://img.icons8.com/material-rounded/64/000000/shopping-cart.png"/>
        <div class="centered">{this.state.total}</div>
        </div>
      </div>
      
    <div className="container">
    <BookList handleTotal={this.handleTotal}/>
      </div>
        
      </div>
    )
  }
}
