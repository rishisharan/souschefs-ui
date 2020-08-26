import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: string;

  constructor(private itemsService: ItemsService) { }

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

