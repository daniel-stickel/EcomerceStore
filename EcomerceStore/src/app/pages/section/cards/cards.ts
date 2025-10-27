import { Component, Input, } from '@angular/core';
import { ProductType } from '../../../app/core/servico/produto';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cards',
  imports: [RouterLink],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class Cards {
@Input()
public produto!: ProductType;
}
