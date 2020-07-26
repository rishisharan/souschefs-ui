import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  item = {
    title: '',
    description: '',
    published: false
  };

  submitted = false;

  constructor( private itemService: ItemService ) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      title: this.item.title,
      description: this.item.description
    };

    this.itemService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newItem(): void {
      this.submitted = false;
      this.item = {
        title: '',
        description: '',
        published: false
      };
  }

}
