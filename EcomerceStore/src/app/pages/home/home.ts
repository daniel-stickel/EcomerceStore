import { Component, Input } from '@angular/core';
import { ProdutoServico, ProdutoTipo } from '../../core/servico/produto';
import { ProdutoCard } from './cards/cards';

@Component({
  selector: 'app-home',
  imports: [ ProdutoCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  protected produtos: Array<ProdutoTipo> = [];
  constructor(private produtoServico: ProdutoServico) {
    this.loadData();

    this.produtoServico.produtosMustBeReloaded().subscribe(() => {
      this.loadData();
    })
  }

  private loadData() {
    this.produtoServico.getProdutos().subscribe((produtos: Array<ProdutoTipo>) => {
      this.produtos = produtos;
    })
  }
}
