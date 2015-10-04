import {View, Component} from 'angular2/angular2';
import { Router } from 'angular2/router';
import { bind } from 'angular2/di';
import { bootstrap } from 'angular2/angular2';
import { RootRouter } from 'angular2/src/router/router';
import { Pipeline } from 'angular2/src/router/pipeline';

@Component({
  selector: 'auth-app'
})

@View({
  template: '<!--Main App-->'
  , 
  directives: [RouterOutlet]
})

export class App {
  constructor(router: Router) {
    this.router = router;
    router
      .config('/home', Home, 'home')
      .then((_) => router.config('/login', Login, 'login'))
      .then((_) => router.navigate('/home'))
  }

  goTo(event, url) {
    event.preventDefault();
    this.router.navigate(url).then(() => {
      console.log("Router successfully to", url);
    }, () => {
      console.log("Error going to URL", url);
    });
  }
}

bootstrap(App, [ 
  bind(Router).toValue(new RootRouter(new Pipeline()))
]);