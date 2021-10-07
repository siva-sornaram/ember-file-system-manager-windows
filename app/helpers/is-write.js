import { helper } from '@ember/component/helper';

export default helper(function isWrite(permissionval /*, named*/) {
  console.log("isW called, permissionval : ", permissionval);
  console.log(permissionval & 1);
  if (permissionval & 1)  return true;
  else return false;
});
