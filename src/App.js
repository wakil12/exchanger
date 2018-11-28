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
        exchangeRate: 1,
        countries: (null)
      };
    }
    componentDidMount() {
      fetch(`https://free.currencyconverterapi.com/api/v6/countries`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const resultsData = Object.values(data.results)
          this.setState({
            countries:resultsData
          });
          console.log(resultsData[0].name);

        });
      }
    render() {
      return <div>
          <Header />
          <InputForm countries={this.state.countries} />
          <CartView />
          <Footer />
        </div>;
  }
}

export default App;
