import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddItemComponent } from 'src/app/components/add-item/add-item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  pageTitle: string = 'Item List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredItems: Item[];
  _listFilter: string;
//   private _itemService;

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredItems = this.listFilter ? this.performFilter(this.listFilter) : this.items;
  }

  items: Item[] = [];
  private results: Item[];

  ngOnInit(): void {
    this.getChefItems(2);
    this.filteredItems = this.items;
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): Item[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.items.filter((items: Item) => items.itemName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(private itemService: ItemService,
    private dialog: MatDialog){
  }

  addItem(){
    console.log("Adding item");
  }

   onCreate() {
      this.itemService.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(AddItemComponent,dialogConfig);
    }

   private async getChefItems(id){
//         this.itemService.getItemsByChefId(id)
//           .subscribe(data => {
//                 this.items = data;
//             },
//             error => {
//               console.log(error);
//             });
        const promise = await this.itemService.getItemsByChefId(2).toPromise();
//           console.log(promise);
//
//           promise.then((data)=>{
//               this.items = data;
//             console.log("Promise resolved with: " + JSON.stringify(data));
//           }).catch((error)=>{
//             console.log("Promise rejected with " + JSON.stringify(error));
//           });
      this.items = promise;
      console.log("CBD");
      console.log(this.items);

   }

   setResultData(item: Item[]){
      this.items = item;
         console.log(this.items);
   }
}
