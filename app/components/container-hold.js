import Component from '@glimmer/component';
import { action } from '@ember/object';
import cookies from 'ember-cli-js-cookie';
import { inject as service } from '@ember/service';

export default class ContainerHoldComponent extends Component {
  @service router;

  username = cookies.get('username');
  roleId = cookies.get('roleid');

  @action
  invalidate() {
    cookies.remove('username');
    cookies.remove('isvalidated');
    cookies.remove('roleid');
    this.router.transitionTo('login-page');
  }
}
