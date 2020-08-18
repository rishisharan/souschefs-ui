import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: string;

  constructor() { }

  // ngOnInit(): void {
  //   // this.userService.getPublicContent().subscribe(
  //   //   data => {
  //   //     this.content = data;
  //   //   },
  //   //   err => {
  //   //     this.content = JSON.parse(err.error).message;
  //   //   }
  //   // );
  // }
  ngOnInit(): void {
    this.itemsService.getPublicContent().subscribe(
      data => {
        this.items = JSON.parse(data)
      },
      err => {
        this.items = JSON.parse(err.error).message;
      }
    );
  }
}

