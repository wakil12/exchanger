import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';



class CartView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: 'photos',
      Country: {
        from: 'Afghanistan',
        to: 'USA',
      },
    };
  }
  componentDidMount() {
    fetch('https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=CmRaAAAAmVT2FE7KbINT7MlEO4MK-HKw1Dp3NjPSBdRIZJLTLEL7hqaKTLtG6ZylfYzbozn3EnucnyQUv1N-SMoUpT-1DIIJDi07aIbnQ-FjxrCG9YPXyJFjp2tHXyCEvc5xb-6pEhCIXKMu_zMCh4ZmHWaQ3rL_GhS5Bj_miQpM0zDn8LJaiaZJLsFz0A&key=AIzaSyDoD6y7f5LzczqagbtcsyTVPPDphiriDxU')
      .then((response) => {
        return response.json();

      })
      .then((data) => {
        const resultsData = Object.values(data.results)

        this.setState({
          photos:resultsData
        });

      });
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
