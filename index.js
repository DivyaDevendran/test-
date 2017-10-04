const app = require('koa')();
const router = require('koa-router')();
const koaBetterBody = require('koa-better-body');
const jwt = require('./middlewares/jwt');
const authenticate = require('./middlewares/authenticate');
const appService = require('./services/appService');
const logService = require('./services/logService');

app.use(koaBetterBody({
  fields: 'body'
}));

// get api
router.get('/', function*(next) {
  this.body = 'hi muggle';
});

router.get('/apps', function*(next) {
  this.body = appService.getApps();
});

router.get('/apps/:id', function*(next) {
  if (appService.getApp(this.params.id)) {
    this.body = appService.getApp(this.params.id);
  } else {
    this.status = 404;
    this.body = {
      "error": "There is no app with that id"
    };
  }
});

router.get('/logs', function*(next) {
  this.body = logSerice.getLogs(this.request.body);
});
//post api
router.post('/app', function*(next) {
  this.body = appService.postApp(this.request.body);
});

router.post('/login', function*(next) {
  authenticate(this);
});
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
console.log('ok you are working fine :)');
