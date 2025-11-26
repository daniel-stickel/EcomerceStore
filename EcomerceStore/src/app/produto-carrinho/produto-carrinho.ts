import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutoServico, ProdutoTipo } from '../core/servico/produto';
import { CarrinhoServico } from '../core/servico/cart';

@Component({
  selector: 'app-produto-carrinho',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './produto-carrinho.html',
  styleUrl: './produto-carrinho.scss',
})
export class ProdutoCarrinho implements OnInit {
  protected produto!: ProdutoTipo;
  protected formGroup!: FormGroup;
  protected produtoId!: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private produtoServico: ProdutoServico,
    private carrinhoServico: CarrinhoServico
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      quantidade: [1, [Validators.required, Validators.min(1)]],
      observacao: [''], 
      
    });

    this.produtoId = this.route.snapshot.paramMap.get('id') || '';

    if (this.produtoId) {
      this.produtoServico.getProdutoId(this.produtoId).subscribe((produto: ProdutoTipo) => {
        this.produto = produto;
      }, (error: any) => {
        console.error('Erro ao carregar produto:', error);
      });
    }
  }

  get quantidadeControl() {
    return this.formGroup.get('quantidade');
  }

  adicionarAoCarrinho() {
    if (this.formGroup.invalid || !this.produto) {
      alert('Por favor, defina uma quantidade válida e aguarde o produto carregar.');
      return;
    }

    const itemCarrinho = {
      ...this.produto,
      ...this.formGroup.value,
      quantidade: Number(this.formGroup.get('quantidade')?.value)
    };
    
    this.carrinhoServico.adicionaItem(itemCarrinho);
    alert(`${itemCarrinho.quantidade} ${this.produto.nomeProduto} adicionado ao carrinho com sucesso!`);
    
    // Volta a quantidade para 1 após adicionar
    this.formGroup.get('quantidade')?.setValue(1);
  }

 
}