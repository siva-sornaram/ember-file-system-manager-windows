import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';

export default class EdituserHoldComponent extends Component {
  @tracked users;

  constructor() {
    super(...arguments);

    var result = $.ajax({
      type: 'GET',
      url: '/role-based-login-backend/webapi/users',
      contentType: 'application/json',
      global: false,
      async: false,
      success: function (dat) {
        return dat;
      },
      error: function (err) {
        console.log(err);
      },
    }).responseText;

    this.users = JSON.parse(result);
  }
}
