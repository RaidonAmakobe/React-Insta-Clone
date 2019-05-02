import React from 'react';
import CommentSection from './CommentSection/CommentSection';
import Image from 'react-bootstrap/Image'
import Media from 'react-media';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import { wrap } from 'module';


class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }
    render(){
        return (
            <Container>
                <Card style = {{ marginTop: 40 }}>
                <Card.Img variant="top" src="./images/audric.jpg" />
                <Card.Header></Card.Header>
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

