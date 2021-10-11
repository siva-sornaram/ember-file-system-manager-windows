import { helper } from '@ember/component/helper';

export default helper(function isRead(permissionval /*, named*/) {
  // console.log("isR called, permissionval : ", permissionval);
  // console.log(permissionval & 2);
  if (permissionval & 2) return true;
  else return false;
});
