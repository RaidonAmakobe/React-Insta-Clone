import React from 'react';
import Image from 'react-bootstrap/Image'
import Media from 'react-media';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import { wrap } from 'module';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <Container>
                <Card style = {{ marginTop: 50 }}>
                <Card.Img variant="top" src="./images/audric.jpg" />

                    <Card.Body>
                        <Col>
                            <Card.Title class = "text-left">Card title</Card.Title>
                        </Col>
                        <Col>
                            <Card.Text class = "text-left">
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Col>
                        
                    </Card.Body>

                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Container>
        )
    }
}
export default PostContainer;

