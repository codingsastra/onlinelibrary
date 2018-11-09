import React,  {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookDetail from '../components/BookDetail'

class BookDetailPage extends Component{
    constructor(props){
        super(props);
        console.log(props.match.params.id)
        this.state={
            id:props.match.params.id,
            book:{}
        }

        this.getBook=this.getBook.bind(this);
    }

    getBook(){
        fetch("/api/books/" + this.state.id)
        .then((response)=>response.json())
        .then((book)=>{
            this.setState({
                book
            })
        })
        .catch((error)=>{
            console.log(JSON.stringify(error));
            alert("Failed to load book")
        })
    }

    componentDidMount(){
        this.getBook();
    }
    

    render(){
        return(
            <div>
                <Header/>
                <BookDetail book={this.state.book}/>
                <Footer/>
            </div>
        )
    }
}

export default BookDetailPage;