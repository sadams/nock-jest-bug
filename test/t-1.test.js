const nock = require('nock');
const {doReq} = require("./helpers/do-req");
nock.disableNetConnect();

test('one', async () => {
  const scope = nock('http://example.com')
    .get('/foo')
    .reply(200, 'one');

  const {data, status} = await doReq('http://example.com/foo');
  expect(data).toBe('one');
  expect(status).toBe(200);
  scope.done();
  nock.cleanAll();
});
