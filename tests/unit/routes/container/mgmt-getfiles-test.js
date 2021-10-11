import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | container/mgmt-getfiles', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:container/mgmt-getfiles');
    assert.ok(route);
  });
});
