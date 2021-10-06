import { helper } from '@ember/component/helper';

export default helper(function isMgmt(roleId /*, named*/) {
  console.log('is-mgmt helper called, roleId' + roleId);
  if (roleId == 2) {
    return true;
  } else {
    return false;
  }
});
