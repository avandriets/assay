import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ModelsDataService {

  public constructor(
    private http: HttpClient
  ) { }

  public loadData(): Observable<any> {
    return this.http.get('/assets/models.json');
  }

}
