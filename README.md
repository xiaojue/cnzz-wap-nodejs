cnzz-wap-nodejs
===============

cnzz wap statistics by nodejs.
http://tongji.cnzz.com/static/about/wap/index.html

---

```bash
npm install cnzz-wap-nodejs
```

```js
var cnzz_wap = require("cnzz-wap-nodejs");
var siteId = 1234567; //your cnzz siteid
var scheme = 'http'; //or https
var cnzz = new cnzz_wap(siteId,scheme);


var app = express();

app.get("*",function(req,res,next){
  cnzz.trackPage(req.headers['referer'] || '');
  next();
});

```



