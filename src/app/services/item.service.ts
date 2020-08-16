import { Injectable } from '@angular/core';
// import { Items } from 'src/app/models/items/items';
// import { Items } from 'src/app/components/item-list/items';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Item } from 'src/app/models/item';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Injectable({
    providedIn: 'root'
})
export class ItemService {

    private baseUrl = 'http://localhost:9090/api/createItem/2/item';
    item: Item = new Item();
    employeeList: any;

    constructor(private http: HttpClient){}

    getItems(): Item[]
    {
      return [
                   {
                     "itemId": 1,
                     "itemName": "Leaf Rake",
                     "itemDescription": "Leaf rake with 48-inch wooden handle.",
                     "itemImageUrl": "assets/images/leaf_rake.png",
                     "itemPrice": 19.95,
                     "starRating": 3.2
                   },
                   {
                     "itemId": 2,
                     "itemName": "Garden Cart",
                     "itemDescription": "Leaf rake with 48-inch wooden handle.",
                     "itemImageUrl": "assets/images/garden_cart.png",
                     "itemPrice": 32.99,
                     "starRating": 4.2
                   },
                   {
                     "itemId": 5,
                     "itemName": "Hammer",
                      "itemDescription": "Leaf rake with 48-inch wooden handle.",
                     "itemImageUrl": "assets/images/garden_cart.png",
                     "itemPrice": 8.9,
                     "starRating": 4.8
                   }
                 ];
    }

    form: FormGroup = new FormGroup({
        $key: new FormControl(null),
        itemName: new FormControl('', Validators.required),
        itemDescription: new FormControl('', Validators.required),
        itemImageUrl: new FormControl('', Validators.required),
        itemPrice: new FormControl('', Validators.required),
        itemType:  new FormControl('', Validators.required),
        availableTime:  new FormControl('1'),
        availableFromDate:  new FormControl('', Validators.required),
        availableToDate:  new FormControl('')
      });

      initializeFormGroup() {
          this.form.setValue({
            $key: null,
            itemName: '',
            itemDescription: '',
            itemImageUrl:'',
            itemPrice:'',
            itemType: '',
            availableTime: 0,
            availableFromDate: '',
            availableToDate: ''
          });
        }

        insertItem( item: Object ): Observable<Object> {


            return this.http.post(`${this.baseUrl}`, item);
        }

        updateItem( item ) {

        }

        pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
          const data: FormData = new FormData();
          data.append('file', file);
          const newRequest = new HttpRequest('POST', 'http://localhost:9090/api/upload', data, {
            reportProgress: true,
            responseType: 'text'
          });
          const someVal = this.http.request(newRequest);

          return this.http.request(newRequest);
      }

}
