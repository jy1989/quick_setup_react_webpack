import React from 'react';
import $ from 'jquery';
import Loading from './loading';
import Api from './api';
import Tpl from './tpl';
class ZhihuStory extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  componentDidMount() {
        $.get(Api.getStory()+this.props.params.id, (result) => {
           	result.body=result.body.replace(/<img/g,'<ximg');
            //console.log(result.body);
            this.setState(result);
            
        });
    }

  


  render() {
  	
  	if(!this.state.title){
  		return (
    		<Tpl>
    			<Loading/>
    		</Tpl>
    	);
  	}else{
 	 	return (
 	 	<Tpl>
 	 		    <div className="headline">
 	     		<div className="img-wrap">
 	          
					<h1 className="headline-title">{this.state.title}</h1>
 	        		<div className="img-mask"></div>
 	     		</div>
 	    		 <div className="headline-background"></div>
 	 			</div>
 	 <div className="content-inner">
 	     <div className="question">
 	          
		<h2 className="question-title"></h2>
 	
 	         <div className="answer">
 	            {/* <div className="meta">
 	                 <img className="avatar" src="http://pic1.zhimg.com/ebba3f748_is.jpg"/>
					 <span className="author">chenqin，</span><span className="bio">数据帝</span>
 					
 	             </div>*/}
 	             <div className="content" dangerouslySetInnerHTML={{ __html: this.state.body}}></div>
 	         </div>
 	     </div>
 	 </div>
 	 	</Tpl>
 	 
    


    );
    
     }
  }
}

export default ZhihuStory;

