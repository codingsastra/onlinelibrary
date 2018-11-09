import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import LoginPage from './containers/LoginPage'
import RegisterPage from './containers/RegisterPage'
import MyBooksPage from './containers/MyBooksPage'
import AdminPage from './containers/AdminPage'
import AddBookPage from './containers/AddBookPage'
import BookDetailPage from './containers/BookDetailPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/mybooks" component={MyBooksPage}/>
          <Route path="/admin" component={AdminPage}/>
          <Route path="/addbook" component={AddBookPage}/>
          <Route path="/books/:id" component={BookDetailPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
