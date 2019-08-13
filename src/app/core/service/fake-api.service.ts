import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable()
export class FakeApiService {

  constructor(
    private httpService: HttpService
  ) { }

  getFakeData(): Observable<any> {
    return this.httpService.get('https://reqres.in/api/users?per_page=5');
  }
}
