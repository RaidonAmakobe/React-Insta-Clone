import React from 'react';
import Image from 'react-bootstrap/Image'
import Media from 'react-media';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import { wrap } from 'module';

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
                  <CardTitle><Image src = "./images/audric.jpg" fluid style = {{width: 450}}/></CardTitle>

                  <Media query = "(max-width: 400px)">
                  <CardText>
                    <small className="text-muted">
                        <Row style = {{width: 450, marginLeft: 10, marginTop: 10}}>
                            <img src = "./images/like.svg" style = {{width: 19}}/>
                            <img src = "./images/chat.svg" style = {{width: 19, marginLeft: 20}}/>
                        </Row>
                    </small>
                    <small className = "text-muted">
                            <Row style = {{width: 450, marginLeft: 10, marginTop: 10}}>
                                300 Likes
                            </Row>
                           
                                <InputGroup style = {{width: 320, marginLeft: 10, marginTop: 10}}>
                                    <Input placeholder = "Add a comment..." />
                                </InputGroup>  
                    </small>
        
            
                  </CardText>
                  </Media>

                  <Media query = "(min-width: 401px, max-width: 960px)">
                  <CardText>
                    <small className="text-muted">
                        <Row style = {{width: 450, marginLeft: 140, marginTop: 10}}>
                            <img src = "./images/like.svg" style = {{width: 19}}/>
                            <img src = "./images/chat.svg" style = {{width: 19, marginLeft: 20}}/>
                        </Row>
                    </small>
                    <small className = "text-muted">
                            <Row style = {{width: 450, marginLeft: 140, marginTop: 10}}>
                                300 Likes
                            </Row>
                           
                                <InputGroup  style = {{width: 440, marginLeft: 140, marginTop: 10}}>
                                    <Input placeholder = "Add a comment..." />
                                </InputGroup>  
                    </small>
        
            
                  </CardText>
                  </Media>

                  <Media query = "(min-width: 961px)">
                  <CardText>
                    <small className="text-muted">
                        <Row style = {{width: 450, marginLeft: 515, marginTop: 10}}>
                            <img src = "./images/like.svg" style = {{width: 19}}/>
                            <img src = "./images/chat.svg" style = {{width: 19, marginLeft: 20}}/>
                        </Row>
                    </small>
                    <small className = "text-muted">
                            <Row style = {{width: 450, marginLeft: 515, marginTop: 10}}>
                                300 Likes
                            </Row>
                           
                                <InputGroup style = {{width: 450, marginLeft: 515, marginTop: 10}}>
                                    <Input placeholder = "Add a comment..." />
                                </InputGroup>  
                    </small>
                  </CardText>
                  </Media>
                </CardBody>
              </Card>
            </div>
        )
    }
}
export default PostContainer;

