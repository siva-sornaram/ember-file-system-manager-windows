import Component from '@glimmer/component';
import $ from 'jquery';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EdituserHold1cComponent extends Component {
  @service router;

  @action
  update_user() {
    var uname = this.username;
    var userId = this.userid;
    var mgmt = document.querySelector('#mgmt').checked;
    var admin = document.querySelector('#admin').checked;
    var roleid = 1;

    if (admin) {
      roleid = 3;
    } else if (mgmt && !admin) {
      roleid = 2;
    } else {
      roleid = 1;
    }

    var userdata = {
      userId: userId,
      userName: uname,
      roleId: roleid,
    };

    var result = $.ajax({
      type: 'PUT',
      url: '/role-based-login-backend/webapi/users/updateuser',
      contentType: 'application/json',
      data: JSON.stringify(userdata),
      global: false,
      async: false,
      success: function (dat) {
        return dat;
      },
      error: function (err) {
        $('#message').text('There is an Error ...').css('color', 'red');
        console.log(err);
      },
    }).responseText;

    if (result) {
      $('#message').text('Updated User Successfully').css('color', 'green');
    } else {
      $('#message').text('The User is not updated ... ').css('color', 'red');
    }
  }
}
