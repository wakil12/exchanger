import React, { Component } from 'react';

import Header from './components/Header';
import InputForm from './components/InputForm';
import CartView from './components/CartView';
import Footer from './components/Footer';
import './App.css';
const {PlacesService} = window.google.maps.places


class App extends Component {
    constructor(){
      super();
      this.state = {
        amount: 1,
        countries: {},
        currency: {
          from: {},
          to: {},
        },
        currencies: [],
        rate: 0
      };
    }

    setFrom = name => {
      const fromLocation = this.state.countries[name][0];
      console.log(fromLocation)
      this.getPhoto(fromLocation.name, photo => {
        this.setState({
          currency: {
            ...this.state.currency,
            from: {
              name,
              photo
            }
          }
        }, this.setRate);
      })
    }

    setTo = name => {
      const toLocation = this.state.countries[name][0];

      this.getPhoto(toLocation.name, photo => {
        this.setState({
          currency: {
            ...this.state.currency,
            to: {
              name,
              photo
            }
          }
        }, this.setRate);
      })
    }

    setAmount = amount => {
      this.setState({amount})
    }

    flip = amount => {
      this.setState({
        currency: {
          from: this.state.currency.to,
          to: this.state.currency.from
        },
        amount
      }, this.setRate)
    }

    setCurrency(){
      const fromLocation = this.state.countries["EUR"][0];
      const toLocation = this.state.countries["AFN"][0];

      this.getPhoto(fromLocation.name, fromPhoto => {
        this.getPhoto(toLocation.name, toPhoto => {
          this.setState({
            currency: {
              from: {
                name: "EUR",
                photo: fromPhoto
              },
              to: {
                name: "AFN",
                photo: toPhoto
              }
            }
          }, this.setRate);
        })

      })
    }

    async setInitialState(){
      const countries = await this.getCountries();
      const currencies = await this.getCurrencies();

      this.setState({
        countries,
        currencies
      },this.setCurrency)
    }

    setRate = () => {
      const exchangeString = `${this.state.currency.from.name}_${this.state.currency.to.name}`;
      return fetch(`/convert?q=${exchangeString}&compact=ultra`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            rate: data[exchangeString]
          })
        })
    }

    componentDidMount() {
      this.service = new PlacesService(document.querySelector('.test-places'))
      this.setInitialState()
    }

    async getCurrencies (){
      return await fetch(`/currencies`)
        .then((response) => response.json())
        .then((data) =>  Object.values(data.results));
    }

    async getCountries(){
      const countryReducer = (currencies, country) => {
        if (currencies[country.currencyId]){
          currencies[country.currencyId].push(country);
        } else {
          currencies[country.currencyId] = [country];
        }

        return currencies;
      }

      return await fetch(`/countries`)
        .then(response => response.json())
        .then(data => Object.values(data.results))
        .then(results => results.reduce(countryReducer, {}));
    }

    getPhoto(query, callback){
      this.service.findPlaceFromQuery({
         query,
         fields: ["photos"]
       },
       result => callback(result[0].photos[0].getUrl()));
    }

    render() {
      return (
        <div>
            <Header />
            <InputForm
              countries={this.state.currencies}
              currency={this.state.currency}
              amount={this.state.amount}
              rate={this.state.rate}
              setRate={this.setRate}
              setAmount={this.setAmount}
              setFrom={this.setFrom}
              setTo={this.setTo}
              flip={this.flip}
            />
            <CartView currency={this.state.currency}/>
              <div className="test-places"></div>
            <Footer />
      </div>
      )
  }
}

export default App;
