import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  currentItem = null;
  message = '';

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
       this.message = '';
       this.getItems(this.route.snapshot.paramMap.get('id'));
  }

  getItems(id): void {
    this.itemService.get(id)
      .subscribe(
        data => {
          this.currentItem = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
      const data = {
        title: this.currentItem.title,
        description: this.currentItem.description,
        published: status
      };

      this.itemService.update(this.currentItem.id, data)
        .subscribe(
          response => {
            this.currentItem.published = status;
            console.log(response);
          },
          error => {
            console.log(error);
          });
    }

    updateTutorial(): void {
      this.itemService.update(this.currentItem.id, this.currentItem)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The tutorial was updated successfully!';
          },
          error => {
            console.log(error);
          });
    }

    deleteTutorial(): void {
      this.itemService.delete(this.currentItem.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/items']);
          },
          error => {
            console.log(error);
          });
    }
}
