import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Item } from 'src/app/models/item';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
    selectedFiles: File;
    currentFileUpload: File;
    item: Item = new Item();
    progress: { percentage: number } = { percentage: 0 };
    selectedFile = null;
    fileUrl:string;

    constructor( public service: ItemService,  public notificationService: NotificationService, public dialogRef: MatDialogRef<AddItemComponent> ) { }

    ngOnInit() {
   //   this.service.getItems();
    }

   onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

    onSubmit() {
      if (this.service.form.valid) {
        if (!this.service.form.get('$key').value){
  //            this.service.form.value.itemImageUrl = this.fileUrl;
  //         this.service.insertItem(this.service.form.value);
            this.service.form.value.itemImageUrl = this.fileUrl;
            this.service.insertItem(this.service.form.value)
                .subscribe(data => console.log(data), error => console.log(error));
        }
        else{
          this.service.updateItem((this.service.form.value));
          this.service.form.reset();
          this.service.initializeFormGroup();
          this.notificationService.success(':: Submitted successfully');
          this.onClose();
        }
      }
    }

    onClear() {
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }

    selectFile(event) {
        this.selectedFiles = event[0];
    }

    onUploadClicked($event){
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles;
        this.service.pushFileToStorage(this.currentFileUpload).subscribe(event => {
          this.selectedFiles = undefined;
          console.log(event);
          this.fileUrl = event['body'];
          console.log(this.fileUrl);
        });
    }
}
