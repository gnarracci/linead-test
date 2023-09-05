import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/interfaces/items';
import { ProdutsService } from 'src/app/services/produts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  data:Items[] = [];

  constructor(private productsService: ProdutsService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productsService.getData().subscribe(
      res => {
        this.data = res;
        console.log(res);
      }
    )
  }

  addToCart(item: Items) {
    return this.productsService.addItem(item);
  }

}
