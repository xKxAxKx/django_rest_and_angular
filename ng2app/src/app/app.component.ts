import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EntryService } from './services/entry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  public constructor(private entryService: EntryService){}

  ngOnInit() {
    //エントリ情報を取得
    this.entryService.getEntry();
  }

}
