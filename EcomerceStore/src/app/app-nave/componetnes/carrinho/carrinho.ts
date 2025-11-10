import { Component } from '@angular/core';
import { ProdutoTipo } from '../../../core/servico/produto';
import { CarrinhoServico } from '../../../core/servico/cart';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.scss',
})
export class Carrinho {
  protected produtos!: ProdutoTipo[];

  constructor(private carrinhoServico: CarrinhoServico) {
    this.carrinhoServico.carrinhoItemsHasChanged().subscribe((produtos: Array<ProdutoTipo>) => {
      this.produtos = this.produtos;
    });
  }
}
