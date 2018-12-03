import React from 'react';
import { Form, FormGroup, Label, CustomInput, Input, ButtonGroup, Button } from 'reactstrap';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
      currency: {
        from: 'EUR',
        to: 'AFN',
      },
      rate: 0
    }
  };
  componentDidMount(){
    this.setRate();
  }
  resultInput = React.createRef();
  setFrom = event => {
    this.setState({
      currency: {
        ...this.state.currency,
        from: event.target.value
      }
    }, this.setRate);
  }

  setTo = event => {
    this.setState({
      currency: {
        ...this.state.currency,
        to: event.target.value
      }
    }, this.setRate)
  }

  setAmount = event => {
    this.setState({
      amount: event.target.value
    })
  }
  flip = event => {

    this.setState({
      currency: {
        from: this.state.currency.to,
        to: this.state.currency.from
      },
      amount: this.resultInput.current.props.value
    },this.setRate)
  }
  setRate = () => {
    const exchangeString = `${this.state.currency.from}_${this.state.currency.to}`;
    return fetch(`/convert?q=${exchangeString}&compact=ultra`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          rate: data[exchangeString]
        })
      })
  }
  render() {
    return (
      <Form>
        <FormGroup className="input">
            <Label>Amount:</Label>
            <Input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.setAmount}
           />
        </FormGroup>

        <FormGroup className="currency">
            <Label>Currency:</Label>
            <CustomInput className="data"
              name="from"
              id="input"
              type="select"
              value={this.state.currency.from}
              onChange={this.setFrom}
              >
              {this.props.countries && this.props.countries.map(countries =>(
                 <option
                   key={countries.id}
                   value={countries.id}>
                   {countries.currencyName}
                 </option>
              ))}
            </CustomInput>
        </FormGroup>

        <ButtonGroup className="button">
            <Button
            onClick={this.flip}>⇄</Button>
        </ButtonGroup>

        <FormGroup className="input">
            <Label>Amount:</Label>
            <Input
              type="number"
              name="number"
              ref={this.resultInput}
              value={(this.state.amount * this.state.rate).toFixed(2)}
              disabled />
        </FormGroup>

        <FormGroup className="currency">
            <Label>Currency:</Label>
            <CustomInput
              type="select"
              id="input"
              name="select"
              value={this.state.currency.to}
              onChange={this.setTo}>
              {this.props.countries && this.props.countries.map(countries =>(
                <option
                  key={countries.id}
                  value={countries.id}>
                  {countries.currencyName}</option>
              ))}
            </CustomInput>
        </FormGroup>
      </Form>
    );
  }
}
