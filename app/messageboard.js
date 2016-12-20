import wilddog from 'wilddog';
//import { Link } from 'react-router';
import React from 'react';
class MessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], name: '',message:''};
    
    var config = {
  		syncURL: "https://wild-dog-7584.wilddogio.com" //输入节点 URL
	};
	wilddog.initializeApp(config);
	this.ref = wilddog.sync().ref('items');
	
	let _this=this;
	
	this.ref.on("value", function(snapshot) {
   	 //console.log(snapshot.val());
   	 let items=[];
   	 for(var i in snapshot.val()){
   	 	items.push(snapshot.val()[i]);
   	 }
   	 //console.log(items);
   	  _this.setState(() => ({
      		items: items,
      		name: '',
      		message:''
      }));
	});
    
    
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleMessageChange(e) {
    this.setState({message: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    //console.log(this.state);
    if(!this.state.name || !this.state.message){
    	alert('?');
    }else{
    
    	var newItem = {
      		name: this.state.name,
      		message:this.state.message,
      		id: Date.now()
   		};
   
    	this.ref.push(newItem);
    }
  }

	
  render() {
    return (
	  <div className="row" style={{marginTop:'20px'}}>
	  	
        
        <div className="col-lg-5">
        
        <div className="panel">
        	<h3>留言板</h3>
			<form  onSubmit={this.handleSubmit} role="form">
			<div className="form-group">
				<label>姓名</label>
          		<input className="form-control" onChange={this.handleNameChange} value={this.state.name} />
          	</div>
          	<div className="form-group">
          		<label>留言</label>
          		<textarea className="form-control" rows="3" onChange={this.handleMessageChange} value={this.state.message} /> 
          		 
          	</div>
          	<button className="btn btn-primary">提交</button>
        	</form>
        </div>
        </div>
        <div className="col-lg-7">
        	<MessageList items={this.state.items} />
        </div>
        
      </div>
    );
  }
}


class MessageList extends React.Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.items.map(item => (
          <li className="list-group-item" key={item.id}><span className="label label-default">{item.message}</span> from <span className="label label-success">{item.name}</span></li>
        ))}
      </ul>
    );
  }
}
export default MessageBoard;