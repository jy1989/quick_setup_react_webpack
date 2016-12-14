import React from 'react';
import { Link } from 'react-router';

class ZhihuItem extends React.Component {
  /*showImg( url ) {
        var frameid = 'frameimg' + Math.random();
        window.img = '<img id="img" src=\''+url+'?'+Math.random()+'\' /><script>window.onload = function() { parent.document.getElementById(\''+frameid+'\').height = document.getElementById(\'img\').height+\'px\'; }<'+'/script>';
        return ('<iframe id="'+frameid+'" src="javascript:parent.img;" frameBorder="0" scrolling="no" width="100%"></iframe>');
   }
	*/

  render() {
  	var item=this.props.item;
    return (
     <div className="wrap" key={item.id} >
          <div className="box">
          		<Link to={'story/'+item.id} className="link-button"  >
          			{//<img src={item.images[0]} className="preview-image"/>
          			}
          			<span className="title">{item.title}</span>
          		</Link>
          </div>
     </div>
    );
  }
}

class ZhihuStoriesGroup extends React.Component {
  render() {
    return (
     <div className="col-lg-4" >
     	{this.props.storiesGroup.map((item,index) => (
          	<ZhihuItem item={item} key={item.id} />
        ))}
     </div>
    );
  }
}


class ZhihuStories extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props)
  }

  render() {
  	 let storiesGroup={'0':[],'1':[],'2':[]};
  	 this.props.stories.map((story,index) => {
  	 	let k=((index+1)%3)
  	 	storiesGroup[k].push(story)
        //console.log(index+1,(index+1)%3)
     });
  	 //console.log(storiesGroup); 
  	
    return (
      <div className="row">
      	<ZhihuStoriesGroup storiesGroup={storiesGroup[0]} />
      	<ZhihuStoriesGroup storiesGroup={storiesGroup[1]} />
      	<ZhihuStoriesGroup storiesGroup={storiesGroup[2]} />
      </div>
    );
  }
}

export default ZhihuStories;

