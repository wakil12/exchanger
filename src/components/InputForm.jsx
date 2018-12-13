import React from 'react';
import { Form, FormGroup, Label, CustomInput, Input, ButtonGroup, Button } from 'reactstrap';

export default class InputForm extends React.Component {

  resultInput = React.createRef();

  render() {
    return (
      <Form>
        <FormGroup className="input">
            <Label>Amount:</Label>
            <Input
              type="number"
              name="amount"
              value={this.props.amount}
              onChange={event => this.props.setAmount(event.target.value)}
           />
        </FormGroup>

        <FormGroup className="currency">
            <Label>Currency:</Label>
            <CustomInput className="data"
              name="from"
              id="input"
              type="select"
              value={this.props.currency.from.name}
              onChange={event => this.props.setFrom(event.target.value)}
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
            onClick={() => this.props.flip(this.resultInput.current.props.value)}>⇄</Button>
        </ButtonGroup>

        <FormGroup className="input">
            <Label>Amount:</Label>
            <Input
              type="number"
              name="number"
              ref={this.resultInput}
              value={(this.props.amount * this.props.rate).toFixed(2)}
              disabled />
        </FormGroup>

        <FormGroup className="currency">
            <Label>Currency:</Label>
            <CustomInput
              type="select"
              id="input"
              name="select"
              value={this.props.currency.to.name}
              onChange={event => this.props.setTo(event.target.value)}>
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
