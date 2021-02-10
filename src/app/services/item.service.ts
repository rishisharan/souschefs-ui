import { Injectable } from '@angular/core';
import { ApplicationUrls } from 'src/app/classesAndInterfaces/ApplicationUrls';
import { CommonUtils } from 'src/app/components/shared/utils/common-utils';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Item } from 'src/app/models/item';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
@Injectable({
    providedIn: 'root'
})
export class ItemService {


    private baseUrl = 'http://localhost:9090/api';
    private options  = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    item: Item = new Item();
    employeeList: any;

    constructor(private http: HttpClient){}

    getItems(): Observable<any>{
      return this.http.get(ApplicationUrls.getItems(), this.options).pipe(catchError(CommonUtils.handleError));
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


            return this.http.post(`${this.baseUrl}/createItem/2/item`, item);
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

      getItemsByChefId(id): Observable<Item[]> {
            return this.http.get<Item[]>(`${this.baseUrl}/item/getAllItemsByChefId/${id}`);
      }

}
