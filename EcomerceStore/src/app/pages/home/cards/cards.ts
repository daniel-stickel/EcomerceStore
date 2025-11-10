import { Component, input, Input } from '@angular/core';
import { ProdutoServico, ProdutoTipo } from '../../../core/servico/produto';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarrinhoServico } from '../../../core/servico/cart';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cards',
  imports: [ReactiveFormsModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class ProdutoDetail {
  protected produto!: ProdutoTipo;
  private produtoId: number;
  protected formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private produtoServico: ProdutoServico,
    private carrinhoServico: CarrinhoServico,
    private formBuilder: FormBuilder
  ) {
    this.produtoId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.produto = this.produtoServico.getProdutoId(this.produtoId);

    this.formGroup = this.formBuilder.group({
      quantity: ['1'],
      observations: ['teste', Validators.required],
    });

    this.formGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.formGroup.get('quantity')?.valueChanges.subscribe((value) => {
      console.log('Quantity changed:', value);
      if (value < 1) {
        this.formGroup.get('observations')?.disable();
      } else {
        this.formGroup.get('observations')?.enable();
      }
    });
  }

  export class ProdutoCards {
    
    @Input()
    public Produtct!: ProdutoTipo;
  
    constructor(private produtoServico: ProdutoServico) {}

    delete() {
      this.produtoServico.deleteProdutoId(this.produto.id);
    }
  
  } 
      
    
  addToCart() {
    if (this.formGroup.invalid) {
      alert('Por favor, preencha os campos corretamente. ');
      return;
    }

    this.carrinhoServico.adicionaItem({
      ...this.produto,
      ...this.formGroup.value,
    });
  }
}
