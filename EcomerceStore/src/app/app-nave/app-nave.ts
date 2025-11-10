import { Component } from '@angular/core';
import { ProdutoTipo } from '../core/servico/produto';
import { CarrinhoServico } from '../core/servico/cart';
import { RouterLink } from '@angular/router';
import { Carrinho } from './componetnes/carrinho/carrinho';

@Component({
  selector: 'app-app-nave',
  imports: [RouterLink, Carrinho],
  templateUrl: './app-nave.html',
  styleUrl: './app-nave.scss'
})
export class AppNave {
  protected produtoQTD: number = 0;

  constructor(private carrinhoservico: CarrinhoServico) {
    this.carrinhoservico.carrinhoItemsHasChanged().subscribe((produtos: Array<ProdutoTipo>) => {
      this.produtoQTD = produtos.length;
    })
  }

}
