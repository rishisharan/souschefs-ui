import { Injectable } from '@angular/core';
// import { Items } from 'src/app/models/items/items';
// import { Items } from 'src/app/components/item-list/items';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Item } from 'src/app/models/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';
    item: Item = new Item();
    employeeList: any;

    constructor(private http: HttpClient){}

    getItems(): Item[]
    {
      return [
                   {
                     "itemId": 1,
                     "itemName": "Leaf Rake",
                     "itemCode": "GDN-0011",
                     "releaseDate": "March 19, 2019",
                     "description": "Leaf rake with 48-inch wooden handle.",
                     "price": 19.95,
                     "starRating": 3.2,
                     "imageUrl": "assets/images/leaf_rake.png"
                   },
                   {
                     "itemId": 2,
                     "itemName": "Garden Cart",
                     "itemCode": "GDN-0023",
                     "releaseDate": "March 18, 2019",
                     "description": "15 gallon capacity rolling garden cart",
                     "price": 32.99,
                     "starRating": 4.2,
                     "imageUrl": "assets/images/garden_cart.png"
                   },
                   {
                     "itemId": 5,
                     "itemName": "Hammer",
                     "itemCode": "TBX-0048",
                     "releaseDate": "May 21, 2019",
                     "description": "Curved claw steel hammer",
                     "price": 8.9,
                     "starRating": 4.8,
                     "imageUrl": "assets/images/hammer.png"
                   },
                   {
                     "itemId": 8,
                     "itemName": "Saw",
                     "itemCode": "TBX-0022",
                     "releaseDate": "May 15, 2019",
                     "description": "15-inch steel blade hand saw",
                     "price": 11.55,
                     "starRating": 3.7,
                     "imageUrl": "assets/images/saw.png"
                   },
                   {
                     "itemId": 10,
                     "itemName": "Video Game Controller",
                     "itemCode": "GMG-0042",
                     "releaseDate": "October 15, 2018",
                     "description": "Standard two-button video game controller",
                     "price": 35.95,
                     "starRating": 4.6,
                     "imageUrl": "assets/images/xbox-controller.png"
                   }
                 ];
    }

    form: FormGroup = new FormGroup({
        $key: new FormControl(null),
        fullName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.email),
        mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
        city: new FormControl(''),
        gender: new FormControl('1'),
        department: new FormControl(0),
        hireDate: new FormControl(''),
        isPermanent: new FormControl(false)
      });

      initializeFormGroup() {
          this.form.setValue({
            $key: null,
            fullName: '',
            email: '',
            mobile: '',
            city: '',
            gender: '1',
            department: 0,
            hireDate: '',
            isPermanent: false
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
