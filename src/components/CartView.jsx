import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
const CartView = (props) => {
    return (
    <Row>
      <Col>
        <Card body>
          <CardTitle className="btn border border-secondary">Famouse Places:</CardTitle>
          <CardText className="btn border border-secondary">Name of Country:</CardText>
             <img className="mt" width="100%"  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="" />
        </Card>
      </Col>
      <Col>
        <Card body>
          <CardTitle className="btn border border-secondary">Famouse Places:</CardTitle>
          <CardText className="btn border border-secondary">Name of Country:</CardText>
           <img className="mt" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="" />
        </Card>
      </Col>
    </Row>
  );
};

export default CartView;
