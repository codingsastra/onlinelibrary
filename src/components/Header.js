import React,  {Component} from 'react'
import {
    Link, NavLink
} from 'react-router-dom'

class Header extends Component{
    constructor(){
        super();
        this.state={
            loggedIn:false
        }
    }

    componentDidMount(){
        if(localStorage.getItem("token")){
            this.setState({
                loggedIn:true
            })
        }
        else
        {
            this.setState({
                loggedIn:false
            })
        }
    }

    logout(){
        localStorage.removeItem("token");
        this.setState({
            loggedIn:false
        })
    }

    render(){
        if(!this.state.loggedIn){
            return(
                <div>
                    <NavLink to="/" activeClassName="selected">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </div>
            )
        }
        else{
            return(
                <div>
                    <NavLink to="/" activeClassName="selected">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                    <NavLink to="/mybooks">My Books</NavLink>
                    <NavLink to="/admin">Admin</NavLink>
                </div>
            )
        }
        
    }
}

export default Header;