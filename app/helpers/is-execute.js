import { helper } from '@ember/component/helper';

export default helper(function isExecute(permissionval /*, named*/) {
  // console.log("isE called, permissionval : ", permissionval);
  // console.log(permissionval & 6);
  if (permissionval & 6)  return true;
  else return false;
});
