function CS(siteId,scheme) {
	this.siteId = siteId;
	this.scheme = scheme;
	this.imageDomain = 'c.cnzz.com';
}

CS.prototype = {
	constructor: CS,
	_mt_rand:function(min,max){
		var choices = max - min + 1; 
		return Math.floor(Math.random() * choices + min);
	},
	_getImageUrl: function(referer) {
		var imageLocation = this.scheme + this.imageDomain + '/wapstat.php';
		var query = [];
		query.push('siteid='+(this.siteId * 1));
		query.push('r='+encodeURIComponent(referer));
		query.push('rnd='+this._mt_rand(1,2147483648));
		return imageLocation + '?' + query.join('&');
	},
	trackPageView: function(referer) {
		return this._getImageUrl(referer);
	}
};

module.exports = CS;
