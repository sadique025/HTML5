self.addEventListener('message',function(e){
this.self.postMessage(e.data);
},false);