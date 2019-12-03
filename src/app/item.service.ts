import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsUrl = 'http://localhost:8080/items';

  constructor(
    private http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);

  }

  getItem(id: string): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url);
  }

  searchItems(term: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.itemsUrl}/?name=${term}`);
  }

  addItem(item: Item) {
    this.http.post<Item>(this.itemsUrl, item)
      .subscribe();
  }

  updateItem(item: Item): Observable<any> {
    return this.http.put(this.itemsUrl, item);
  }
}

