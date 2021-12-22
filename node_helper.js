const NodeHelper = require("node_helper");
const Log = require("logger");
const { exec } = require("child_process");
const fs=require("fs");

module.exports = NodeHelper.create({
	start:function(){
	Log.log("SOCCERNODE started")
	},

	getdata :function(next){

	exec("python "+this.path+"/getdata.py", (error, stdout, stderr) => {
    		if (error) {
		        Log.log(`error: ${error.message}`);
		    }
		if (stderr) {
		        Log.log(`stderr: ${stderr}`);
		}

		next(JSON.parse(stdout))
	});

}
,
socketNotificationReceived: function(notification, payload){
	var self=this
	Log.log(notification+" notification received")	
	if (notification==="DATA") {
		self.getdata(function(data){
			self.sendSocketNotification("DATA",{schedule:data})
		})
	}


}
});

