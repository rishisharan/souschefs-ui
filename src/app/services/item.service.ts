import { Injectable } from '@angular/core';
// import { Items } from 'src/app/models/items/items';
// import { Items } from 'src/app/components/item-list/items';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Item } from 'src/app/models/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

        insertItem( employee: Object ): Observable<Object> {
//             this.item.itemName = item.fullName;
            return this.http.post(`${this.baseUrl}`, employee);
        }

          updateItem( item ) {
//               this.employeeList.update(employee.$key,
//                 {
//                   fullName: employee.fullName,
//                   email: employee.email,
//                   mobile: employee.mobile,
//                   city: employee.city,
//                   gender: employee.gender,
//                   department: employee.department,
//                    hireDate: employee.hireDate == "" ? "" : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
//                   isPermanent: employee.isPermanent
//                 });
            }


}
