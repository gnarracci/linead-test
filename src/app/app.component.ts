import { Component, OnInit } from '@angular/core';
import { ProdutsService } from './services/produts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private productService: ProdutsService) {}

  ngOnInit(): void {
    this.qty();
  }

  qty() {
    const res = this.productService.quantity();
    return res;
  }

}
