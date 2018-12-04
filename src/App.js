import React, { Component } from 'react';

import Header from './components/Header';
import InputForm from './components/InputForm';
import CartView from './components/CartView';
import Footer from './components/Footer';
import './App.css';



class App extends Component {
    constructor(){
      super();
      this.state = {
        countries: [],
      };
    }
    componentDidMount() {
      fetch(`/currencies`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const resultsData = Object.values(data.results)
          this.setState({
            countries:resultsData
          });

        });
      }


    render() {
      return (
        <div>
            <Header />
            <InputForm countries={this.state.countries} />
            <CartView />
            <Footer />
      </div>
      )
  }
}

export default App;
