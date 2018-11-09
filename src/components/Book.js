import React,  {Component} from 'react'
import {
    Link
} from 'react-router-dom'

class Book extends Component{
    render(){
        return(
            <div>
                <h1><Link to={"/books/" + this.props.book._id}>{this.props.book.title}</Link></h1>
                <h3>{this.props.book.author}</h3>
            </div>
        )
    }
}

export default Book;