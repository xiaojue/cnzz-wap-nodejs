cnzz-wap-nodejs
===============

cnzz wap statistics by nodejs

---

```bash
npm install cnzz-wap-nodejs
```

```js
var cnzz_wap = require("cnzz-wap-nodejs");
var cnzz = new cnzz_wap(siteId,scheme);


var app = express();

app.get("*",function(req,res,next){
  cnzz.trackPage(req.headers['referer'] || '');
  next();
});

```
