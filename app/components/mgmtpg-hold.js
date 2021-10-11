import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import cookies from 'ember-cli-js-cookie';

export default class MgmtpgHoldComponent extends Component {
  @service router;

  @action
  getfiles() {
    var filepath = this.filePath;

    console.log(filepath);

    cookies.set('filepath', filepath);

    console.log(cookies.get('filepath'));

    this.router.transitionTo('/container/getfiles');
  }
}
