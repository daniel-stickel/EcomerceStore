import { Component, Input, } from '@angular/core';
import { ProdutoTipo } from '../../../core/servico/produto';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cards',
  imports: [RouterLink],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class ProdutoCards {
@Input()
public produto!: ProdutoTipo;
}




