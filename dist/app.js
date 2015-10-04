System.register("app", ["angular2/angular2", "angular2/router", "angular2/di", "angular2/src/router/router", "angular2/src/router/pipeline"], function($__export) {
  "use strict";
  var __moduleName = "app";
  var View,
      Component,
      Router,
      bind,
      bootstrap,
      RootRouter,
      Pipeline,
      App;
  return {
    setters: [function($__m) {
      View = $__m.View;
      Component = $__m.Component;
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Router = $__m.Router;
    }, function($__m) {
      bind = $__m.bind;
    }, function($__m) {
      RootRouter = $__m.RootRouter;
    }, function($__m) {
      Pipeline = $__m.Pipeline;
    }],
    execute: function() {
      App = (function() {
        function App(router) {
          this.router = router;
          router.config('/home', Home, 'home').then((function(_) {
            return router.config('/login', Login, 'login');
          })).then((function(_) {
            return router.navigate('/home');
          }));
        }
        return ($traceurRuntime.createClass)(App, {goTo: function(event, url) {
            event.preventDefault();
            this.router.navigate(url).then((function() {
              console.log("Router successfully to", url);
            }), (function() {
              console.log("Error going to URL", url);
            }));
          }}, {});
      }());
      $__export("App", App);
      Object.defineProperty(App, "annotations", {get: function() {
          return [new Component({selector: 'auth-app'}), new View({
            template: '<!--Main App-->',
            directives: [RouterOutlet]
          })];
        }});
      Object.defineProperty(App, "parameters", {get: function() {
          return [[Router]];
        }});
      bootstrap(App, [bind(Router).toValue(new RootRouter(new Pipeline()))]);
    }
  };
});
