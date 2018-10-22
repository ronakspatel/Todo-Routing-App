import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { UserModel } from '../user.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  public userList: UserModel[];
  

  @Output()
  addUserEvent = new EventEmitter();

  constructor() { this.userList = [];
  }

  ngOnInit() {
    
    
  }
  modified(index: number) {
    this.addUserEvent.emit(index);
    
  }
}
