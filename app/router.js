import EmberRouter from '@ember/routing/router';
import config from 'ember-role-based-login/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login-page', { path: '/login' });
  this.route('container', function () {
    this.route('home-page', { path: '/home' });
    this.route('mgmt-page', { path: '/mgmt' });
    this.route('admin-page', { path: '/admin' }, function () {
      this.route('adduser');
      this.route('edituser', function () {
        this.route('edituser-hold', function () {
          this.route('edituser-hold1');
        });
      });
    });
  });
  this.route('not-found', { path: '/*path' });
});
