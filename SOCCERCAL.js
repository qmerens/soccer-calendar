/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("SOCCERCAL", {
	// Default module config.
	defaults: {
		text: "Hello World!"
	},

	getTemplate: function () {
		return "SOCCERCAL.njk";
	},

	getTemplateData: function () {
		return this.config;
	}
});
