import { Component, Input } from '@angular/core';
import { ProdutoServico, ProdutoTipo } from '../../core/servico/produto';
import { ProdutoCard } from './cards/cards';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ ProdutoCard ],
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
  // ... dentro da sua classe App {...}

currentYear: number = new Date().getFullYear();

// ...
}
