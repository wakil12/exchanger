import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';



class CartView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
    <Row>
      <Col>
        <Card body>
          <CardTitle className="btn border border-secondary"></CardTitle>
          {/* <CardText className="btn border border-secondary">Name of Country:</CardText> */}
             <img className="mt" width="100%"  src="https://s3.amazonaws.com/dsg.files.app.content.prod/gereports/wp-content/uploads/2016/01/29161435/Nice2.jpg" alt="" />
        </Card>
      </Col>
      <Col>
        <Card body>
          <CardTitle className="btn border border-secondary"></CardTitle>
          {/* <CardText className="btn border border-secondary">Name of Country:</CardText> */}
           <img className="mt" width="100%" src="https://s3.amazonaws.com/dsg.files.app.content.prod/gereports/wp-content/uploads/2016/01/29161435/Nice2.jpg" alt="" />
        </Card>
      </Col>
    </Row>
        );
     }
   };

export default CartView;
