import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import {
  BvcData,
  BvcResponse,
  InstrumentDetail,
} from '../models/bvc.interface';

@Injectable({
  providedIn: 'root',
})
export class BvcService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<BvcData[]> {
    return this.httpClient
      .get<
        BvcResponse<BvcData[]>
      >('https://young-wave-84989.herokuapp.com/rendivalores/bvc')
      .pipe(map((data) => data.response));
  }

  getDetail(symbol: string): Observable<InstrumentDetail> {
    return this.httpClient
      .get<
        BvcResponse<InstrumentDetail>
      >(`https://young-wave-84989.herokuapp.com/rendivalores/bvc/detail/${symbol}`)
      .pipe(map((data) => data.response));
  }
}
