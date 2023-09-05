import { Component, OnInit } from '@angular/core';
import { ProdutsService } from 'src/app/services/produts.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cartdetail',
  templateUrl: './cartdetail.component.html',
  styleUrls: ['./cartdetail.component.css']
})


export class CartdetailComponent implements OnInit{

  myCart$ = this.productsService.myCart$

  constructor(private productsService: ProdutsService) {}

  ngOnInit(): void {
    this.qty();
  }

  qty() {
    const res = this.productsService.quantity();
    return res;
  }

  deleteItem(id: string) {
    this.productsService.deleteItem(id);
  }

  totalCart() {
    this.productsService.totalCart();
  }


}
