import { Component, OnInit } from '@angular/core';
import { Items } from './items';
import { ItemService } from 'src/app/services/item.service';

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
  filteredItems: Items[];
  _listFilter: string;
  private _itemService;

  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredItems = this.listFilter ? this.performFilter(this.listFilter) : this.items;
  }

  items: Items[] = [];

  ngOnInit(): void {
    this.items = this._itemService.getItems();
    this.filteredItems = this.items;
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): Items[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.items.filter((items: Items) => items.itemName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(itemService: ItemService){
    this._itemService = itemService;
  }

  addItem(){
    console.log("Adding item");
  }

}
