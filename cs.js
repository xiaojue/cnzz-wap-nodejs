var http = require('http');
var https = require('https');
var url = require('url');

function CS(siteId, scheme) {
	this.siteId = siteId;
	this.scheme = scheme + '://';
	this.request = (scheme == 'http') ? http.request: https.request;
	this.imageDomain = 'c.cnzz.com';
}

CS.prototype = {
	constructor: CS,
	_mt_rand: function(min, max) {
		var choices = max - min + 1;
		return Math.floor(Math.random() * choices + min);
	},
	_getImageUrl: function(referer) {
		var imageLocation = this.scheme + this.imageDomain + '/wapstat.php';
		var query = [];
		query.push('siteid=' + (this.siteId * 1));
		query.push('r=' + encodeURIComponent(referer));
		query.push('rnd=' + this._mt_rand(1, 2147483648));
		return imageLocation + '?' + query.join('&');
	},
	trackPageView: function(referer) {
		return this._getImageUrl(referer);
	},
	trackPage: function(referer) {
		var requestUrl = this.trackPageView(referer);
		var parseObj = url.parse(requestUrl);
		this.request({
			hostname: parseObj.host,
			port: parseObj.port || 80,
			path: parseObj.path,
			method: 'GET'
		}).on('error', function(e) {
			console.error(e);
		}).end();
	}
};

module.exports = CS;
