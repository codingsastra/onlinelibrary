import React,  {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/Search'
import BooksList from '../components/BooksList'

class AdminPage extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div>
                <Header/>
                <Search/>
                <BooksList/>
                <Footer/>
            </div>
        )
    }
}

export default AdminPage;