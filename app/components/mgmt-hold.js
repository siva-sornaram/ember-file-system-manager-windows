import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';
import { action } from '@ember/object';
import cookies from 'ember-cli-js-cookie';

export default class MgmtHoldComponent extends Component {
  @tracked files;

  filepathtitle = cookies.get('filepath');

  File = {
    id: 0,
    fname: null,
    permissionval: 0
  }

  constructor() {
    super(...arguments);

    var filedata = {
      path: this.filepathtitle,
    };

    console.log(filedata);

    var result = $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/role-based-login-backend/webapi/ntfs/getfiles',
      contentType: 'application/json',
      global: false,
      async: false,
      data: JSON.stringify(filedata),
      success: function (dat) {
        return dat;
      },
      error: function (err) {
        console.log(err);
      },
    }).responseText;

    this.files = JSON.parse(result);
    console.log(this.files);
  }

  @action
  update_permission(id) {

    $('.save-btn-' + id).css("display", "block");

    var file = $('#fname-' + id).text();
    console.log('file : ', file);
    var val = 0;
    $('.chkper-' + id + ':checked').each(function () {
      val |= $(this).val();
    });
    console.log('rowid : ', id, 'values : ', val);

    this.File.id = id;
    this.File.fname = this.filepathtitle + "\\" + file; 
    this.File.permissionval = val;
    console.log(this.File);
  }

  @action
  save_permission(id) {
    var filename = $('#fname-'+id).text();
    var filePath = this.filepathtitle + "\\" + filename;
    var val = 0;
    $('.chkper-' + id + ':checked').each(function () {
      val |= $(this).val();
    });

    var filedata = {
      fname: filePath,
      permissionval: val
    }

    var result = $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/role-based-login-backend/webapi/ntfs/setfilepermission',
      contentType: 'application/json',
      global: false,
      async: false,
      data: JSON.stringify(filedata),
      success: function (dat) {
        $('.save-btn-' + id).css("display", "none");
        return dat;
      },
      error: function (err) {
        console.log(err);
      },
    }).responseText;

    console.log("result : ", result);

    var result1 = JSON.parse(result);

    if(result1 == true) {
      $('.msg-' + id).text('Saved Successfully').css({display : "block", color: "green"});
    } else {
      $('.msg-' + id).text('Changes not done').css({display : "block", color: "red"});
    }
  }
}
