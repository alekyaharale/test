import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public name:any;
 public uservalue : any;
 public show_card:boolean=false;
  userList: Array<User> = [];
  constructor(private router:Router) {

  }

  ngOnInit() {
  }
  addUser(){
   console.log(this.name,this.uservalue);
    let userObj = new User();
    userObj.name = this.name;
    userObj.uservalue = this.uservalue;
    userObj.id = Math.floor(10000000 + Math.random() * 90000000);
    this.userList.push(userObj);
    localStorage.setItem("users",JSON.stringify(this.userList));
    console.log(this.userList)

  }
  create_cards(){
    this.show_card=true;
    if(localStorage.getItem('users')){
     let userList = JSON.parse(localStorage.getItem('users') || '{}') ;
     return userList;
    }

  }
  graph(){
    this.router.navigate(['/graph'])
  }

}
