import React from 'react';
class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<div style={{width:'200px',margin:'0 auto',fontSize:'18px'}}>加载中，请稍后...</div>
    );
  }
}
export default Loading;