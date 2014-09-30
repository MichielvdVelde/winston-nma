

var util = require('util');
var winston = require('winston');
var NMA = require('notify-my-android');


var NotifyMyAndroid = winston.transports.NotifyMyAndroid = function(options) {

	this.name = 'NotifyMyAndroid';
	this.level = options.level || 'error';
	this.appName = options.appName;
	this.metatata = options.metadata || false;
	this.nma = new NMA(options.apiKey);

};

util.inherits(NotifyMyAndroid, winston.Transport);

NotifyMyAndroid.prototype.log = function (level, msg, meta, callback) {
	if(level != this.level) return callback(null, false);
	if(this.metadata) msg = msg + "\r\n\r\nMetadata:\r\n" + util.inspect(meta);
	this.nma.notify(this.appName, 'Server error', msg, function(err, remaining) {
		if(err) return callback(err);
		callback(null, true);
	});
};