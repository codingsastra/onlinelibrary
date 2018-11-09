import React,  {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'

class AboutPage extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div>
                <Header/>
                <About/>
                <Footer/>
            </div>
        )
    }
}

export default AboutPage;