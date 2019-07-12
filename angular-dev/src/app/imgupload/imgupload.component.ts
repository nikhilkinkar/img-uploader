import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-imgupload',
  templateUrl: './imgupload.component.html',
  styleUrls: ['./imgupload.component.scss']
})
export class ImguploadComponent implements OnInit {
  urls = new Array<string>();
  showDBImages = new Array<string>();
  data = new Array<{}>();

  @ViewChild('fileimport') fileimport: ElementRef;

  constructor(private service: AppService) {
    this.showImages();
  }

  ngOnInit() {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.urls = [];
      const files = event.target.files;
      if (files) {
        for (const file of files) {
          if (file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg') {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              console.log(file);
              this.data.push({
                name: file.name,
                data: e.target.result
              });
              this.urls.push(e.target.result);
            };
            reader.readAsDataURL(file);
          }
        }
      }
    }
  }

  removeIt(i) {
    this.urls.splice(i, 1);
    this.data.splice(i, 1);
    this.fileimport.nativeElement.value = null;
  }

  deleteIt(id, i) {
    this.service.deleteImage(id).subscribe(result => {
      console.log('Deleted image');
      this.showDBImages.splice(i, 1);
    });
  }

  uploadFiles() {
    if (this.data.length > 0) {
      this.service.uploadImages(this.data).subscribe((result) => {
        this.data = [];
        this.urls = [];
        this.fileimport.nativeElement.value = null;
        this.showImages();
      });
    }
  }

  showImages() {
    this.service.getImages().subscribe((r: Array<any>) => {
      // console.log("r",r);
      if (r.length > 0) {
        this.showDBImages = r;
        // r.forEach(element => {
        //   this.showDBImages.push(element.data);
        // });
      }
    });
  }
}
