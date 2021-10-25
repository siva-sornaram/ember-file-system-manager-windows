import { helper } from '@ember/component/helper';

export default helper(function isExecute(permissionval /*, named*/) {
  console.log("isE called, permissionval : ", permissionval);
  console.log(permissionval & 4);
  if ((permissionval & 4) == 4) return true;
  else return false;
});
