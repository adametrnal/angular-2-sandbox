System.register("login/login", [], function($__export) {
  "use strict";
  var __moduleName = "login/login";
  var Login;
  return {
    setters: [],
    execute: function() {
      Login = (function() {
        function Login(router) {
          this.router = router;
        }
        return ($traceurRuntime.createClass)(Login, {login: function(event, username, password) {
            var $__0 = this;
            event.preventDefault();
            fetch('http://localhost:3001/sessions/create', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: username,
                password: password
              })
            }).then(status).then(json).then((function(response) {
              localStorage.setItem('jwt', response.id_token);
              $__0.router.parent.navigate('/home');
            })).catch((function(error) {
              alert(error.message);
              console.log(error.message);
            }));
          }}, {});
      }());
      $__export("Login", Login);
      Object.defineProperty(Login, "annotations", {get: function() {
          return [new Component({selector: 'login'}), new View({templateUrl: 'login/login.html'})];
        }});
      Object.defineProperty(Login, "parameters", {get: function() {
          return [[Router]];
        }});
    }
  };
});
