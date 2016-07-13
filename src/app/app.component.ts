import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <section>
    <app-example2></app-example2>
  </section>
  <br />
  <br />
  <br />
  <br />
  <br />
  <section>
    <app-example3></app-example3>
  </section>
  <br />
  <br />
  <br />
  <br />
  <br />
  <section>
    <app-example4></app-example4>
  </section>
  `,
  styleUrls: ['app.component.css'],
  directives: [
    Example2Component,
    Example3Component,
    Example4Component
  ]
})
export class AppComponent {

}