import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-incomplete-task',
  templateUrl: './incomplete-task.component.html',
  styleUrls: ['./incomplete-task.component.css']
})
export class IncompleteTaskComponent implements OnInit {
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
  //  this.userList.forEach(element => {
  //    if (element.id==index) {
  //      element.isComplete==true;
  //    }
  //  });
   this.userList[index].isComplete = true;
   this.serviceResponse.setData(this.userList);
   return this.userList;
 }

}
