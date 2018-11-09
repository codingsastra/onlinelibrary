import React,  {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AddBook from '../components/AddBook'

class AddBookPage extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div>
                <Header/>
                <AddBook/>
                <Footer/>
            </div>
        )
    }
}

export default AddBookPage;