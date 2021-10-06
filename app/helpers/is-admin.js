import { helper } from '@ember/component/helper';

export default helper(function isAdmin(roleId /*, named*/) {
  console.log('is-admin helper called, roleId' + roleId);
  if (roleId == 3) {
    return true;
  } else {
    return false;
  }
});
