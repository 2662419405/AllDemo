const request = require('supertest');
const assert = require('assert');
const KKB = require('koa');

describe('app.context', () => {
  const app1 = new KKB();
  app1.context.msg = 'kaikeba';
  const app2 = new KKB();

  it('should merge properties', () => {
    app1.use((ctx, next) => {
      assert.equal(ctx.msg, 'kaikeba');
      ctx.body = 'xx'
      ctx.status = 200;
    });

    return request(app1.listen())
      .get('/') 
      .expect('xx')
      .expect(200);
  });

  it('should not affect the original prototype', () => {
    app2.use((ctx, next) => {
      assert.equal(ctx.msg, undefined);
      ctx.status = 204;
    });

    return request(app2.listen())
      .get('/')
      .expect(204);
  });
});
