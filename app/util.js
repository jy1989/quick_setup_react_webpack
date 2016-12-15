import $ from 'jquery';
let store={};
class Util  {
	static storeGet(url,cb){
		//console.log(store);
		if(store[url]){
			cb(store[url])
		}else{
			$.get(url, (data) => {
				store[url]=data;
            	cb(data);
        	});
		}
	}	
}
export default Util;