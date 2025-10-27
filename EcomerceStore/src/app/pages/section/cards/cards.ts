import { Component, Input, } from '@angular/core';
import { ProductType } from '../../../coreRename/servico/produto';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cards',
  imports: [RouterLink],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class ProductCards {
@Input()
public produto!: ProductType;
}
