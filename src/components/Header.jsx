import React from 'react';
import { Card, CardHeader } from 'reactstrap';



class Header extends React.Component {
  render() {
    return (
      <Card className="image">
          <CardHeader className="header text-center">Currency exchanger</CardHeader>
      </Card>
    );
  }
}

export default Header;
