import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Array<Item>;

  constructor( private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems()
      .subscribe( (response: any) => {
          //add spinner logic
          //add view logic
      });
  }

}

