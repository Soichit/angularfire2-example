import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Example3Component } from './example3/example3.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <br />
  <h1>Soichi's AngularFire2 Shopping List</h1>
  <br />
  <br />

  <section>
    <app-example3></app-example3>
  </section>
  
  `,
  styleUrls: ['app.component.css'],
  directives: [
    Example3Component,
  ]
})
export class AppComponent {
  title = 'app works!';
}