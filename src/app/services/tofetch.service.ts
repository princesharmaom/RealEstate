import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Modal } from '../property/modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TofetchService {
  constructor(private http: HttpClient) {}

  getAllProperties(): Observable<Modal[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<Modal> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
