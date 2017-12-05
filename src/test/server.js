import requestsuper from 'supertest';
import app from '../app.js';
//打开端口
function request() {
  return requestsuper(app.listen())
}
requestsuper('测试路由', function () {
  it('点赞', function (done) {
    request()
      .get('/update')
      .expect(200)
      .end(function (err, res) {
        if (res.code == 1) return done(err);
        done();
      })
  });
});