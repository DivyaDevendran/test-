const jwt = require('koa-jwt');

module.exports = function (ctx) {
  if (ctx.request.body.password === 'divya') {
    ctx.status = 200;
    ctx.body = {
      token: jwt.sign({ role: 'admin' }, '$EcrEtKeY'), 
      message: "Successfully logged in !!! "
    };
  } else {
    ctx.status = ctx.status = 401;
    ctx.body = {
      message: "Authentication failed....."
    };
  }
  return ctx;
}
