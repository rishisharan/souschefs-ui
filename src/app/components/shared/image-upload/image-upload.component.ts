import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
   providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: ImageUploadComponent,
        multi: true
      }
    ],
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements ControlValueAccessor {

  @Input() progress;
  onChange: Function;
  public file: File | null = null;

 @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
  }

  constructor( private host: ElementRef<HTMLInputElement> ) {
  }

  writeValue( value: null ) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) {
  }


}
