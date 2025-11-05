import { Component } from '@angular/core';
import { ProdutoTipo } from '../core/servico/produto';
import { CarrinhoServico } from '../core/servico/cart';
import { RouterModule } from '@angular/router';
import { Carrinho } from './componetnes/carrinho/carrinho';

@Component({
  selector: 'app-app-nave',
  imports: [RouterModule, Carrinho],
  templateUrl: './app-nave.html',
  styleUrl: './app-nave.scss'
})
export class AppNave {
  protected produtoQTD: number = 0;

  constructor(private carrinhoServico: CarrinhoServico) {
    this.carrinhoServico.carrinhoItemsHasChanged().subscribe((produtos: Array<ProdutoTipo>) => {
      this.produtoQTD = produtos.length;
    })
  }

}
