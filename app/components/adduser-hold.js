import Component from '@glimmer/component';
import $ from 'jquery';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdduserHoldComponent extends Component {
  @service router;

  @action
  add_user() {
    var uname = this.username;
    var mgmt = document.querySelector('#mgmt').checked;
    var admin = document.querySelector('#admin').checked;
    var roleid = 1;

    console.log(uname, mgmt, admin);

    if (admin) {
      roleid = 3;
    } else if (mgmt && !admin) {
      roleid = 2;
    } else {
      roleid = 1;
    }

    var userdata = {
      userName: uname,
      roleId: roleid,
      pass: uname,
    };

    console.log(roleid);

    var result = $.ajax({
      type: 'POST',
      url: '/role-based-login-backend/webapi/users/createuser',
      contentType: 'application/json',
      data: JSON.stringify(userdata),
      global: false,
      async: false,
      success: function (dat) {
        return dat;
      },
      error: function (err) {
        console.log(err);
        $('#message').text('There is an Error ...').css('color', 'red');
      },
    }).responseText;

    console.log(typeof result, result);

    if (result) {
      $('#message').text('Added User Successfully').css('color', 'green');
    } else {
      $('#message').text('The User is not added ... ').css('color', 'red');
    }
  }
}
