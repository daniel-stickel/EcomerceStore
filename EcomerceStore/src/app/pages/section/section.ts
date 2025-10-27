import { Component } from '@angular/core';
import { ProductCards } from './cards/cards';
import { ProductType, ProdutoService } from '../../coreRename/servico/produto';

@Component({
  selector: 'app-products',
  imports: [ProductCards],
  templateUrl: './section.html',
  styleUrl: './section.scss',
})
export class Cards {
  protected products: Array<ProductType> = [];
  constructor(private productService: ProdutoService) {
    this.products = this.productService.getProducts();
  }
}
