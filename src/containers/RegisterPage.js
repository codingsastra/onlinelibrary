import React,  {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Register from '../components/Register'

class RegisterPage extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div>
                <Header/>
                <Register/>
                <Footer/>
            </div>
        )
    }
}

export default RegisterPage;