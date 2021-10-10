import React from "react";
import {Button} from 'react-bootstrap';

class ViewVideoPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoLink: props.videoLink,
            title : props.title
		}
	}
  render() {
    const { onRouteChange } = this.props;
    return (
      <div>
		<div style={{position:"fixed" ,top:"0",right:"0",marginTop:"6rem",marginRight:"2rem"}}>
            <Button onClick={() => onRouteChange('home')} style={{marginBottom:"1rem"}} >All Videos</Button>
          </div>
         
      	<video width = '900px' height = '505px' style={{marginTop:"6rem"}} controls>
      		<source src={this.state.videoLink}/>
  				<p>This browser does not support the video element.</p>
  			</video>
      </div>
		);
  }
}

export default ViewVideoPage;