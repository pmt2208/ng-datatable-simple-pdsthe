import { Component } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Human';
  heroes = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }  
  ];
  displayedColumns = ['id', 'name'];
  dataSource: MyDataSource;
  ngOnInit(){
     this.dataSource = new MyDataSource(this.heroes);
  }
}

export class MyDataSource extends DataSource<any> {
constructor(private data: any[]) {
    super();
  }
  connect(): Observable<any[]> {
    return Observable.of(this.data)
  }

  disconnect() {

  }

  }
  


