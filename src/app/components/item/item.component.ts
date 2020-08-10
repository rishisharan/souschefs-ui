import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Item } from 'src/app/models/item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item: Item = new Item();
  constructor( public service: ItemService, public dialogRef: MatDialogRef<ItemComponent> ) { }

  ngOnInit() {
    this.service.getItems();
  }

   onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value)
//         this.service.insertItem(this.service.form.value);
          this.service.insertItem(this.service.form.value)
              .subscribe(data => console.log(data), error => console.log(error));
      else{
        this.service.updateItem((this.service.form.value));
        this.service.form.reset();
        this.service.initializeFormGroup();
//         this.notificationService.success(':: Submitted successfully');
        this.onClose();
      }
    }
  }

    onClear() {
      this.service.form.reset();
      this.service.initializeFormGroup();
//       this.notificationService.success(':: Submitted successfully');
    }
}
