import React,  {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/Search'
import BooksList from '../components/BooksList'

class MyBooksPage extends Component{
    constructor(){
        super();
        this.state={
            books:[]
        }
        this.getBooks=this.getBooks.bind(this);
    }
    
    getBooks(){
        fetch("/api/users/books",
        {
            method: 'get',
            headers: {
              'Accept': 'application/json',
              'x-access-token':localStorage.getItem("token")
            }
          }
        )
        .then(response=>response.json())
        .then((books)=>{
            this.setState({
                books
            })
        })
    }

    componentDidMount(){
        this.getBooks();
    }

    render(){
        return(
            <div>
                <Header/>
                <Search/>
                <BooksList books={this.state.books}/>
                <Footer/>
            </div>
        )
    }
}

export default MyBooksPage;