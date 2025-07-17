import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Holiday } from '../models/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  private apiUrl = 'https://api.api-ninjas.com/v1/holidays?country=CA&type=public_holiday';

  constructor(private http: HttpClient) {}

  getHolidays(): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(this.apiUrl);
  }
}
