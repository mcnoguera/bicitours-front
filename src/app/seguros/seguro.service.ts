import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seguro } from './Seguro';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/s3_bicitours-api/api/';
const seguros = 'seguros';

@Injectable()
export class SeguroService {

  constructor(private http: HttpClient) { }
  getSeguros(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(API_URL + seguros);
  }
}