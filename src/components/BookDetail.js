import React,  {Component} from 'react'

class BookDetail extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div>
                <h1>{this.props.book.title}</h1>
                <p>{this.props.book.author}</p>
            </div>
        )
    }
}

export default BookDetail;