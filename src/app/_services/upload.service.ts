import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  formData = new FormData();

  constructor(private http: HttpClient) {}

  uploadInformation(information: any): Observable<any> {
    console.log('upload information function called');
    return this.http.post(
      AUTH_API + 'uploadInfo',
      { information: information },
      httpOptions
    );
  }

  uploadImage(file: File): Observable<any> {
    this.formData.append('file', file);
    const res = this.http.post(AUTH_API + 'uploadImage', this.formData);
    this.formData.delete('file');
    return res;
  }
}
