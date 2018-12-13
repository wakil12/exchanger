import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';



class CartView extends React.Component {



  setFromPhoto(){
    const fromLocation = this.state.currencies[this.props.currency.from]

   this.service.findPlaceFromQuery({
      query: fromLocation[0].name,
      fields: ["photos"]
    },
    result => {
      this.setState({
        photos: {
          ...this.state.photos,
          from: result[0].photos[0].getUrl()
        }
      },this.setToPhoto)
    });
  }

  setToPhoto(){
    const toLocation = this.state.currencies[this.props.currency.to]

   this.service.findPlaceFromQuery({
      query: toLocation[0].name,
      fields: ["photos"]
    },
    result => {
      this.setState({
        photos: {
          ...this.state.photos,
          to: result[0].photos[0].getUrl()
        }
      })
    });

  }



  render () {
    return (
    <Row>
      <Col>
        <Card body>
          <CardTitle className="btn border border-secondary"></CardTitle>
          {/* <CardText className="btn border border-secondary">Name of Country:</CardText> */}
             <img className="mt" width="100%"  src={this.props.currency.from.photo} alt="" />
        </Card>
      </Col>
      <Col>
        <Card body>
          <CardTitle className="btn border border-secondary"></CardTitle>
          {/* <CardText className="btn border border-secondary">Name of Country:</CardText> */}
           <img className="mt" width="100%" src={this.props.currency.to.photo} alt="" />

        </Card>
      </Col>
    </Row>
        );
     }
   };

export default CartView;
