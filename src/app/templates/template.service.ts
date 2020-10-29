import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http:HttpClient) {
    
   }

   getImageList(){
     return this.http.get('https://raw.githubusercontent.com/gojnimer/pohl/master/src/app/templates/images.json');
   }
}
