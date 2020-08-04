import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor( public service: ItemService, public dialogRef: MatDialogRef<ItemComponent> ) { }

  departments = [{ id:1, value: 'Dept 1'},{ id:2, value: 'Dept 2'},{ id:3, value: 'Dept 3'}];
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
//       if (!this.service.form.get('$key').value)
//         this.service.insertEmployee(this.service.form.value);
//       else
//       this.service.updateEmployee(this.service.form.value);
//       this.service.form.reset();
//       this.service.initializeFormGroup();
//       this.notificationService.success(':: Submitted successfully');
//       this.onClose();
    }
  }

    onClear() {
      this.service.form.reset();
      this.service.initializeFormGroup();
//       this.notificationService.success(':: Submitted successfully');
    }
}
