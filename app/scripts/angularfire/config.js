angular.module('firebase.config', [])
  .constant('FBURL', 'https://a3ddk.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');