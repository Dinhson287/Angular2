import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { Item } from '../item.model';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://666a67177013419182cf24b8.mockapi.io/api/v2/foods';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Item[]>{
    return this.httpClient.get<Item[]>(apiUrl).pipe(
    )
  }
}

