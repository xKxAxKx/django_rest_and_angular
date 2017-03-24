import { Component } from '@angular/core';
import { EntryService } from './services/entry';
import { EntryStore } from './stores/entry';


@Component({
  selector: 'my-app',
  template: `
    <entries></entries>
  `
})

export class AppComponent {

  constructor(
    private entryService: EntryService
  ) {
  }

  ngOnInit() {
    // this.userService.fetchUser();
  }

}
