import React from 'react';
import { Form, FormGroup, Label, CustomInput, Input, Button } from 'reactstrap';

export default class InputForm extends React.Component {
  constructor(props) {
  super(props);
  this.state = {value: ''};
  this.handleChange = this.handleChange.bind(this);
}
handleChange(event) {
  this.setState({value: event.target.value});
}
  render() {
console.log(this.state.value);
// console.log(this.state)
    return (
      <Form>
        <FormGroup className="input">
            <Label>Amount:</Label>
            <Input type="number" name="number" id="" placeholder="Add Your Currency!"
            onChange={this.handleChange} value={this.state.countries} />
        </FormGroup>

          <FormGroup className="currency">
              <Label>Currency:</Label>
              <CustomInput className="data" type="select" name="select"
                onChange={this.handleChange} value={this.state.countries}>
                {this.props.countries && this.props.countries.map(countries =>(
                   <option key={countries.id} value={countries.currencyName}>
                     {countries.currencyName}</option>
                ))}
              </CustomInput>
          </FormGroup>

          <FormGroup>
             <Button onClick={this.handleChange}>⇆</Button>
         </FormGroup>

          <FormGroup className="input">
              <Label>Amount:</Label>
              <Input type="number" name="number" id="" placeholder="with a placeholder"  disabled />
          </FormGroup>

        <FormGroup className="currency">
            <Label>Currency:</Label>
            <CustomInput type="select" name="select">
              {this.props.countries && this.props.countries.map(countries =>(
                <option key={countries.id} value={countries.currencyName}>
                  {countries.currencyName}</option>
              ))}
            </CustomInput>
        </FormGroup>
      </Form>
    );
  }
}
