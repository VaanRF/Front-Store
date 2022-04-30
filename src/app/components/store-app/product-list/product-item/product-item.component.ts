import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  url : string = "";

  @Input()
  livro!: Produto;

  constructor() {

   }

  ngOnInit(): void {



  }

}