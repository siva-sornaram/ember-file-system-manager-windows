import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';
import { action } from '@ember/object';

export default class MgmtHoldComponent extends Component {

    @tracked files;

    constructor() {
      super(...arguments);
  
      var result = $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/role-based-login-backend/webapi/ntfs',
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

    @action
    update_permission(id) {

    console.log("rowid: ",id);

      var file = $('#fname-'+id).text();
      console.log("file : ", file);
      var val = 0;
       $('.chkper-'+id+':checked').each(function () {
          //  arr[i++] = $(this).val();
          val |= $(this).val();
       });
       console.log("rowid : ", id ,"values : ",val);
    }

    
}
