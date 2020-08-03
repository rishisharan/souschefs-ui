import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/components/item-list/items';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
//  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  pageTitle: string = 'Item detail';
  item: Items;

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
     this.pageTitle += ': ${id}';
     this.item = {
           "itemId": id,
            "itemName": 'Leaf Rake',
             "itemCode": 'GDN-011',
             "releaseDate": 'Mar 19',
             "description": 'Leaf Rake with 48 inch',
             "price": 19.95,
             "starRating": 3.2,
             "imageUrl": 'assets/images/leaf_rake.png'
       }
  }

  constructor(private route: ActivatedRoute, private router: Router){
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  onBack(): void {
    this.router.navigate(['/user']);
  }
}
