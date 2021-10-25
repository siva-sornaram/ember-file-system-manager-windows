import { helper } from '@ember/component/helper';

export default helper(function isFC(permissionval /*, named*/) {
  console.log("FC helper called, permissionval : ", permissionval);
  console.log(permissionval & 8);
  if ((permissionval & 8) == 8) return true;
  else return false;
});
