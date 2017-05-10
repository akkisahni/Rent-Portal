import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<!-- main app container -->
  <div class="jumbotron backdrop">
      <div class="container">
          <div class="col-sm-8 col-sm-offset-2">              
              <router-outlet></router-outlet>
          </div>
      </div>
  </div>`,
})
export class AppComponent  { name = 'Angular'; }
