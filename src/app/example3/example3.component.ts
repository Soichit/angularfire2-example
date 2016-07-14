import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-example3',
  template: `
  
  Item: <input type="text" #newItem />
  Size: <input type="text" #newSize />
  <button (click)="add(newItem.value, newSize.value)">Add</button>
  <button (click)="deleteEverything()">Delete All</button>
  <hr />

  <ul>
    <li *ngFor="let item of items | async">
      <span (click)="addOptions()">{{item.text}} ({{item.size}})</span>
    </li>
  </ul>
  <hr />


  `,
})
export class Example3Component {
  items: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/foodItems');
  }

  add(newItem: string, newSize: string) {
    this.items.push({ text: newItem, size: newSize });
  }
  /*
  update(key: string, newSize: string) {
    this.items.update(key, { size: newSize });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  */
  deleteEverything() {
    this.items.remove();
  }

  addOptions() {

  }
}
