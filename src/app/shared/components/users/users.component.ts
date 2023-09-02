import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public productName:string='FrontEnd Developer';
  skills =["Html","Css","Javascript","Typescript","Bootstrap"]
  constructor() { }

  ngOnInit(): void {
  }

}
