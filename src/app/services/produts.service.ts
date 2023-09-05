import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../interfaces/items';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutsService {

  API_URI = "https://fakestoreapi.com";

  // Cart List
  myList:Items[] = [];

  // Observable Cart
  private myCart = new BehaviorSubject<Items[]>([])
  myCart$ = this.myCart.asObservable();

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<Items>(`${this.API_URI}/products`);
  };

  addItem(item:Items){


      this.myList.push(item);
      console.log('myList', this.myList)
      item.quantity = this.myList.length
      console.log(item.quantity)

      // Emiting Observable
      this.myCart.next(this.myList);

  }

  quantity() {
    const qty = this.myList.length
    return qty;
  }

  deleteItem(id:string) {
    this.myList = this.myList.filter((item) => {
      return item.id != id
    })
    this.myCart.next(this.myList);
  }

  totalCart() {
    const total = this.myList.reduce((acc, items) => { return acc + (items?.price?); }, 0)
    return total
  }
}
