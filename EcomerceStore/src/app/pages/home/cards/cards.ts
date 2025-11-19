import { Component, Input } from '@angular/core';

import { RouterLink } from "@angular/router";
import { ProdutoServico, ProdutoTipo } from '../../../core/servico/produto';

@Component({
  selector: 'app-cards',
  imports: [RouterLink],
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


// import { Component, Input, input } from '@angular/core';
// import { ActivatedRoute, Router, RouterLink } from '@angular/router';
// import { ProdutoServico, ProdutoTipo } from '../../../core/servico/produto';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CarrinhoServico } from '../../../core/servico/cart';

// @Component({
//   selector: 'app-cards',
//   imports: [RouterLink],
//   templateUrl: './cards.html',
//   styleUrl: './cards.scss',
// })
// export class ProdutoCards {
//   protected isUpdateMode: boolean = false;
//   private produtoId!: string;
//   protected formGroup!: FormGroup;

//   @Input()
//   public produto!: ProdutoTipo;
  

//   constructor(
//     private produtoServico: ProdutoServico,
//     private router: Router,
//     private route: ActivatedRoute,
//     private formBuilder: FormBuilder
//   ) {    
//   }

//   apagarCarinho() {
//     this.produtoServico.deleteProdutoId(this.produto.id).subscribe(() => {
//       alert('Produto excluido com sucesso');
//       this.produtoServico.reloadProductList();
//     });

//     this.formGroup = this.formBuilder.group({
//       quantidade: ['1'],
//       obeservacao: ['teste', Validators.required],
//     });

//     this.formGroup.valueChanges.subscribe((value) => {
//       console.log(value);
//     });
//   }

//     ngOnInit(): void {
//     this.formGroup = this.formBuilder.group({
//       nomeProduto: ['', Validators.required],
//       preco: ['', Validators.required],
//       console: ['', Validators.required],
//       descricao: ['', Validators.required],
//       image: ['', Validators.required],
//     });

//     this.produtoId = this.route.snapshot.paramMap.get('id') || '';

//     this.initUptate();
//   }
//     private initUptate() {
//     if (this.produtoId) {
//       this.produtoServico.getProdutoId(this.produtoId).subscribe((produto: any) => {
//         this.isUpdateMode = true;
//         //Forma 1
//         this.formGroup.patchValue(produto);
//       })
//     }
//   }

//   // adicionaCarrinho() {
//   //   if (this.formGroup.invalid) {
//   //     alert('Por favor, preencha os campos corretamente.');
//   //     return;
//   //   }

//   //   this.carrinhoServico.adicionaItem({
//   //     ...this.produto,
//   //     ...this.formGroup.value,
//   //   });
//   // }

//   onSubmit() {
//     const value = this.formGroup.value;

//     if (!this.formGroup.valid) {
//       alert('Preencha os campos em vermelho!');
//       return;
//     }

//     if (this.isUpdateMode) {
//       value.id = this.produtoId;
//       this.produtoServico.addProduto(value);
//     } else {
//       this.produtoServico.addProduto(value);
//     }
//   }
// }
