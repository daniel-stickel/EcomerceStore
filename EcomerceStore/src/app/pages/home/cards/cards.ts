import { Component, Input } from '@angular/core';
import { ProdutoServico, ProdutoTipo } from '../../../core/servico/produto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [RouterLink],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class ProdutoCards {
  @Input()
  public produto!: ProdutoTipo;

  constructor(private produtoServico: ProdutoServico) {}

  delete() {
    this.produtoServico.deleteProdutoId(this.produto.id).subscribe(() => {
      alert('Produto excluido com sucesso');
      this.produtoServico.reloadProductList();
    });
  }
}
