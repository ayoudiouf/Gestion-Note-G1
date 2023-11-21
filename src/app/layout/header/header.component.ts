import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  currentUserId?: number;

  currentUser: any;

  userRole?: string;

  db: any;

  ngOnInit(): void {
    this.db = JSON.parse(localStorage.getItem("users") || '[]')
    this.currentUserId = JSON.parse(localStorage.getItem("currentUser") || '[]');

    this.currentUser = this.db.find((elt: any) => elt.id === this.currentUserId);

    this.userRole= this.currentUser.role;
  }

}
