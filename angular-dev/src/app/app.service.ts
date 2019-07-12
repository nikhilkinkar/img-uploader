import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  uploadImages(data) {
    return this.http.post('http://localhost:3000/upload', data);
  }

  getImages() {
    return this.http.get('http://localhost:3000/images');
  }

  deleteImage(id) {
    return this.http.delete('http://localhost:3000/images/' + id);
  }
}
