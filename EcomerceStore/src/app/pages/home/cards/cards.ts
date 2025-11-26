import { Component, Input } from '@angular/core';

import { RouterLink } from "@angular/router";
import { ProdutoServico, ProdutoTipo } from '../../../core/servico/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [RouterLink, CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class ProdutoCard {

  @Input()
  public produto!: ProdutoTipo;

  constructor(private produtoServico: ProdutoServico) {}

  delete() {    
    this.produtoServico.deleteProdutoId(this.produto.id).subscribe(() => {
      alert("Produto excluido com sucesso!");
      this.produtoServico.reloadProductList();
    });
  }
}

