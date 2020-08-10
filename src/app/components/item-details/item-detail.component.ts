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

           "itemId": 5,
           "itemName": "Hammer",
           "itemDescription": "Leaf rake with 48-inch wooden handle.",
           "itemImageUrl": "assets/images/garden_cart.png",
           "itemPrice": 8.9,
           "starRating": 4.8
       }
  }

  constructor(private route: ActivatedRoute, private router: Router){
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  onBack(): void {
    this.router.navigate(['/user']);
  }
}
