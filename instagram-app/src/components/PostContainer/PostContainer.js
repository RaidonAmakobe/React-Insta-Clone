import React from 'react';
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
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                  <CardText>
                    <small className="text-muted">300 likes</small>
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

