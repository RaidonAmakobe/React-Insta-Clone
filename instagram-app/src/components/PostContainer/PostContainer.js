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
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </CardBody>
              </Card>
            </div>
        )
    }
}
export default PostContainer;

