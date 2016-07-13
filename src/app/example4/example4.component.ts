import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'app-example4',
  template: `
  <ul>
    <li *ngFor="let item of items | async">
      {{ item.text }}
    </li>
  </ul>
  <div>
    <h4>Filter by size</h4>
    <button (click)="filterBy('small')">Small</button>
    <button (click)="filterBy('medium')">Medium</button>
    <button (click)="filterBy('large')">Large</button>
  </div>
  `,
})
export class Example4Component {
  items: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;

  constructor(af: AngularFire) {
    this.sizeSubject = new Subject();
    this.items = af.database.list('/messages', { //Doesn't work. Can I not access the same firebase item from different components?
                                                //example3 and example4 are using the same firebase area.
      query: {
        orderByChild: 'size',
        equalTo: this.sizeSubject
      }
    });
  }
  filterBy(size: string) {
    this.sizeSubject.next(size); 
  }
}