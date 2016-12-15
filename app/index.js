import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route ,hashHistory} from 'react-router';
import ZhihuStories from './stories';
import ZhihuStory from './story';
import Loading from './loading';
import Tpl from './tpl';
import Api from './api';
import Util from './util';
class ZhihuApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stories: []};
    //console.log(store);
  }

  componentDidMount() {
        Util.storeGet(Api.getList(), (result) => {
            //console.log(result);
            const data = result;
            if (data) {
               this.setState((prevState) => ({
      				stories: data.stories
				}));
            }
        });
    }

  render() {
  	if(this.state.stories.length==0){
  		return (
    		<Tpl>
    			<Loading/>
    		</Tpl>
    	);
  	}else{
    	return (
    		<Tpl>
    			<ZhihuStories stories={this.state.stories} />
    		</Tpl>
    	);
    }
  }
}

const router = (
    <Router history={hashHistory}>
        <Route path="/" component={ZhihuApp}/>
        <Route path="story/:id" component={ZhihuStory} />
    </Router>
);
ReactDOM.render(
    router,
    document.getElementById('app')
);
