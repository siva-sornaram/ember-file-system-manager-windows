import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';

export default class MgmtHoldComponent extends Component {

    @tracked files;

    constructor() {
      super(...arguments);
  
      var result = $.ajax({
        type: 'GET',
        url: '/role-based-login-backend/webapi/ntfs',
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
  
      this.files = JSON.parse(result);
    }
}
