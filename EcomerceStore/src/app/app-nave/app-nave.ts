import { Component } from '@angular/core';
import { ProdutoTipo } from '../core/servico/produto';

@Component({
  selector: 'app-app-nave',
  imports: [],
  templateUrl: './app-nave.html',
  styleUrl: './app-nave.scss'
})
export class AppNave {
  protected produtoQTD: number = 0;

  constructor(private carrinhoservico: CarrinhoServico) {
    this.carrinhoservico.carrinhoItens().subscribe((produtos: Array<ProdutoTipo>) => {
      this.produtoQTD = produtos.length;
    })
  }

}
