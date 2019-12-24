import { Component, ViewChild } from '@angular/core';
import { ImageCroppedEvent } from './image-cropper/interfaces/image-cropped-event.interface';
import { ImageCropperComponent } from './image-cropper/component/image-cropper.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;

  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event);
  }
  imageLoaded() {
    this.showCropper = true;
     console.log('Image loaded')
  }
  cropperReady() {
    console.log('Cropper ready')
  }
  loadImageFailed () {
    console.log('Load failed');
  }
  rotateLeft() {
    this.imageCropper.rotateLeft();
  }
  rotateRight() {
    this.imageCropper.rotateRight();
  }
  flipHorizontal() {
    this.imageCropper.flipHorizontal();
  }
  flipVertical() {
    this.imageCropper.flipVertical();
  }
}
