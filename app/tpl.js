import React from 'react';
import MessageBoard from './messageboard'
import { Link } from 'react-router';
class Tpl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<div className="main-content">
    <div className="container-fixed-width">
    	<div className="header navbar-fixed-top">
    		<div className="container-fixed-width clearfix">
        	<h1 className="logo"><Link to="/" title="知乎日报" className="link-logo">知乎日报</Link></h1>
    		</div>
		</div>
		<div className="main-content-wrap" style={{paddingTop:'30px'}}>
      			{this.props.children}
		</div>
		<MessageBoard/>
	</div>
</div>
    );
  }
}
export default Tpl;