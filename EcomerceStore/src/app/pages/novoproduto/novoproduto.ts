import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoServico } from '../../core/servico/produto';

@Component({
  selector: 'app-novoproduto',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './novoproduto.html',
  styleUrl: './novoproduto.scss',
})
export class Novoproduto implements OnInit {
  protected formGroup!: FormGroup;
  private produtoId!: string;
  protected isUpdateMode: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private produtoServico: ProdutoServico,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nomeProduto: ['', Validators.required],
      preco: ['', Validators.required],
      console: ['', Validators.required],
      descricao: ['', Validators.required],
      imagem: ['', Validators.required],
    });

    this.produtoId = this.route.snapshot.paramMap.get('id') || '';

    this.initUptate();
  }

  private initUptate() {
    if (this.produtoId) {
      this.produtoServico.getProdutoId(this.produtoId).subscribe((produto: any) => {
        this.isUpdateMode = true;
        this.formGroup.patchValue(produto);
      });
    }
  }

  get nomeProduto() {
    return this.formGroup.get('nomeProduto');
  }
  get preco() {
    return this.formGroup.get('preco');
  }
  get console() {
    return this.formGroup.get('console');
  }
  get descricao() {
    return this.formGroup.get('descricao');
  }
  get imagem() {
    return this.formGroup.get('imagem');
  }

  onSubmit() {
    const value = this.formGroup.value;

    if (!this.formGroup.valid) {
      alert('Preencha os campos em vermelho!');
      return;
    }

    if (this.isUpdateMode) {
      value.id = this.produtoId;
      this.produtoServico.updateProduto(value);
    } else {
      this.produtoServico.addProduto(value);
    }
  }
}

// export class Novoproduto implements OnInit {
//   protected formGroup!: FormGroup;
//   private produtoId!: string;
//   protected isUpdateMode: boolean = false;

//   constructor(
//     private formBuilder: FormBuilder,
//     private produtoServico: ProdutoServico,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.formGroup = this.formBuilder.group({
//       nomeProduto: ['', Validators.required],
//       preco: ['', Validators.required],
//       console: ['', Validators.required],
//       descricao: ['', Validators.required],
//       imagem: ['', Validators.required],
//     });

//     this.produtoId = this.route.snapshot.paramMap.get('id') || '';

//     this.initUpdate();
//   }

//   private initUpdate() {
//     if (this.produtoId) {
//       this.produtoServico.getProdutoId(this.produtoId).subscribe((produto: any) => {
//         this.isUpdateMode = true;
//         this.formGroup.patchValue(produto);
//       });
//     }
//   }

//   get nomeproduto() {
//     return this.formGroup.get('');
//   }
//   get preco() {
//     return this.formGroup.get('');
//   }
//   get console() {
//     return this.formGroup.get('');
//   }
//   get descricao() {
//     return this .formGroup.get('');
//   }
//   get imagem() {
//     return this.formGroup.get('');
//   }

//   onSubmit() {
//     const value = this.formGroup.value;

//     if (!this.formGroup.valid) {
//       alert('Preencha os campos em vermelho!');
//       return;
//     }
//     if (this.isUpdateMode) {
//       value.id = this.produtoId;
//       this.produtoServico.updateProduto(value);
//     } else {
//       this.produtoServico.addProduto(value);
//     }
//   }
// }
