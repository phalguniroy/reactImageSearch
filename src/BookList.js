import React, { Component } from 'react'
import Books from './Book'
import bookData from './bookData'

export default class BookList extends Component {
    constructor(props){
        super(props)
        this.state={
            books: bookData
        }
    }
    handleDelete=(id)=>{
        const sortedBook = this.state.books.filter(item=>item.id!==id);
        this.setState({
            books: sortedBook
        })
    }
    
    render() {

        return (
            <div className="book">{
                this.state.books.map((items)=>{
                    return <Books key={items.id} book={items} handleTotal={this.props.handleTotal} handleDelete={this.handleDelete}/>
                })
            }
           
            </div>
        )
    }
}
