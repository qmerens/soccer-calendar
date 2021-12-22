/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("SOCCERCAL", {


	defaults: {
		setup:[{source:"Futsal CM (sec. 4)",alias:"Quentin"},{source:"Futsal AM Or (sec. 1)",alias:"Virgile"}]
	},
	start:function() {
		Log.log("Sending notification")
		var self=this
		setTimeout(function(){
			self.sendSocketNotification("DATA","")
			setInterval(function(){
				self.sendSocketNotification("DATA","")
				},60*60*1000) // update every hour
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
			this.config.setup.forEach(function(v){
				v.nextgame=self.getnextgame(v.source,data.schedule)
			})

			self.updateDom()
		}
	},


	getTemplate: function () {
		return "SOCCERCAL.njk";
	},

	getTemplateData: function () {

		return this.config;
	}
	
});
