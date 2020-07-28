import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.scss']
})
export class ShowItemsComponent implements OnInit {


  items: any;
  currentItem = null;
  currentIndex = -1;
  title = '';

  constructor( private itemService: ItemService ) { }

  ngOnInit(): void {
//       this.retrieveItems();
  }

//   retrieveItems(): void {
//       this.itemService.getAll()
//         .subscribe(
//           data => {
//             this.items = data;
//             console.log(data);
//           },
//           error => {
//             console.log(error);
//           });
//     }
//
//     refreshList(): void {
//       this.retrieveItems();
//       this.currentItem = null;
//       this.currentIndex = -1;
//     }
//
//     setActiveItems(items, index): void {
//       this.currentItem = items;
//       this.currentIndex = index;
//     }
//
//     removeAllItems(): void {
//       this.itemService.deleteAll()
//         .subscribe(
//           response => {
//             console.log(response);
//             this.retrieveItems();
//           },
//           error => {
//             console.log(error);
//           });
//     }
//
//     searchTitle(): void {
//       this.itemService.findByTitle(this.title)
//         .subscribe(
//           data => {
//             this.items = data;
//             console.log(data);
//           },
//           error => {
//             console.log(error);
//           });
//     }

}
