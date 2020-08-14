import React, { Component } from 'react'

export default class Book extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            showCounter:false,
            showAdd:true
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this)
    }
    
    
    handleIncrement=()=>{
        this.setState({count: this.state.count + 1})
        this.props.handleTotal(1)
    }
    handleDecrement=()=>{
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1})
            this.props.handleTotal(-1)
        }
        
    }

    render() {
        console.log(this.props)
        const handleButton=(count)=>{
            if(count > 0){
                return(<div className="centerItems">
                <button 
                style={{background: "#4C8FFB"}}
                className="operator"
                onClick={this.handleIncrement}
                >+</button>
                <h3 
                style={{color: "#4C8FFB"}}
                > &nbsp;{this.state.count}&nbsp; </h3>
                <button 
                style={{background: "#4C8FFB"}}
                className="operator"
                onClick={this.handleDecrement}
                >-</button>
                </div>)
            }else{
                return(<div className="centerItems">
                <button 
                style={{background: "#4C8FFB"}}
                className="Button"
                onClick={this.handleIncrement}
                >add</button>
                </div>)
            }
        }
        const {id, img, author, title} = this.props.book
        const {handleDelete}= this.props
        return (
            <article className="cover book">
            <div><img src={img} width="150" alt="book" /></div> 
            <div className="cardContent">
            <div style={{height:"7rem"}}>
            <h3>{title}</h3>
            <h4 style={{color:"gray"}}>Author: {author}</h4>
            </div>
            {handleButton(this.state.count)}

            <div className="centerItems">
            <button
            type="button"
            style={{background: "red"}}
             className="Button"
            onClick={()=>handleDelete(id)}>
            delete me
            </button>
            </div>
            
            </div>
            
            </article>
        )
    }
}
