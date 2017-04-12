import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { EntryService } from './services/entry.service';
import { EntryStore } from './stores/entry.store';
import { IEntries, IEntry } from './models/entry.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Django RestFrameWorkからのデータ取得';

  public constructor(
    private entryService: EntryService,
    private entryStore: EntryStore,
  ){}

  ngOnInit() {
    //エントリ情報を取得
    this.entryService.getEntries('0');
  }

  prev(){
  }

  next(){

  }

}
