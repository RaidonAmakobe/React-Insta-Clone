import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
              <Card>
                <CardHeader><img src = "./images/circleimg.png" style = {{width: 30, paddingRight: 10}}/>mrtestperson</CardHeader>
                <CardBody>
                  <CardTitle><img src = "./images/audric.jpg" style = {{width: 450}}/></CardTitle>
                  <CardText>
                    <small className="text-muted">
                        <Col sm = "9">
                            <img src = "./images/like.svg" style = {{width: 19}}/>
                            <img src = "./images/chat.svg" style = {{width: 19, marginLeft: 20}}/>
                        </Col>
                    </small>
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                        <Col sm="9">
                            300 likes
                        </Col>
                   </small>
                  </CardText>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </CardBody>
              </Card>
            </div>
        )
    }
}
export default PostContainer;

