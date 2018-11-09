import React,  {Component} from 'react'
import Book from '../components/Book'

class BooksList extends Component{
    constructor(){
        super();
        this.state={
            books:[]
        }

        this.getBooks=this.getBooks.bind(this)
    }

    getBooks(){
        fetch("/api/books")
        .then((response)=>response.json())
        .then((books)=>{
            this.setState({
                books
            })
        })
        .catch((error)=>{
            console.log(JSON.stringify(error));
            alert("Failed to load books")
        })
    }

    componentDidMount(){
        this.getBooks();
    }

    render(){
        return(
            <div>
                <h1>Books List</h1>
                {
                    this.state.books.map((book)=>{
                        return <Book book={book}/>
                    })
                }
            </div>
        )
    }
}

export default BooksList;