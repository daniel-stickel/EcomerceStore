import { Component, Input } from '@angular/core';
import { ProdutoCards } from './cards/cards';
import { ProdutoServico, ProdutoTipo } from '../../core/servico/produto';

@Component({
  selector: 'app-home',
  imports: [ProdutoCards, ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected produtos: Array<ProdutoTipo> = [];
  constructor(private produtoServico: ProdutoServico) {
    this.produtoServico.getProdutos().subscribe((produtos: Array<ProdutoTipo>) => {
    this.produtos = produtos;
    });   
  }
}
