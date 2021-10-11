import { helper } from '@ember/component/helper';

export default helper(function isFC(permissionval /*, named*/) {
  // console.log("FC helper called, permissionval : ", permissionval);
  // console.log(permissionval & 7);
  if (permissionval & 7) return true;
  else return false;
});
