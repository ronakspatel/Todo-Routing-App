import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.css']
})
export class CompleteTaskComponent implements OnInit {
// creating userlist array type UserModel[] for store data
 
public userList: UserModel[];
  
  //inject  mainServices

 constructor(private serviceResponse: UserService) { }

 // call getData method in mainservice

 ngOnInit() {
   this.userList = this.serviceResponse.getData();
  
 }

 // create modified mothed and its return type is UserModel[]

 modified(index: number): UserModel[] {
  this.userList[index].isComplete = true;
  this.serviceResponse.setData(this.userList);
  return this.userList;
}
}
