/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("SOCCERCAL", {
	// Default module config.
		data:{"Quentin":{opponent:"---",datetime:"---"},"Virgile":{opponent:"---",datetime:"---"}},
	defaults: {
		data:{"Quentin":{opponent:"---",datetime:"---"},"Virgile":{opponent:"---",datetime:"---"}},
	},
	start:function() {
		Log.log("Sending notification")
		var self=this
		setTimeout(function(){
			self.sendSocketNotification("DATA","")
			setInterval(function(){
				self.sendSocketNotification("DATA","")
				},60*60*24*1000)
			}
			,1000)
	},
	getnextgame:function(source,data){
		var games=data.filter(function(d){return d.source==source})
		var today=new Date()
		var nextgames=games.filter(function(d){return new Date(d.start)>=today})
		nextgames.sort(function(a,b){return (a.start<b.start?-1:1)})
		var nextgame=nextgames[0]
		return this.formatgame(nextgame)


	},
	formatgame:function(game){
	return {opponent:game.title.split(" - ")[1],
		datetime:new Date(game.start).toLocaleDateString("en-US",
		{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"numeric"})}

	},

	socketNotificationReceived: function(notification,data){
		Log.log(notification+" notification received ")
		Log.log(data)
		var self=this
		if (notification==="DATA") {
			Log.log(data)
			self.config.data.Quentin=self.getnextgame("Futsal CM (sec. 4)",data.schedule)
			self.config.data.Virgile=self.getnextgame("Futsal AM Or (sec. 1)",data.schedule)
			self.updateDom()
		}
	},

	getTemplate: function () {
		return "SOCCERCAL.njk";
	},

	getTemplateData: function () {
		return this.config.data;
	}
	
});
