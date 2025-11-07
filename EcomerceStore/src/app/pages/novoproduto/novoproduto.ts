import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-novoproduto',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './novoproduto.html',
  styleUrl: './novoproduto.scss',
})
export class Novoproduto {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nomeProduto: ['', Validators.required],
      preco: ['', Validators.required],
      categoria: ['', Validators.required],
      imagem: ['', Validators.required],
    });
  }
  get nomeproduto() {return this.formGroup.get('')}
  get preco() {return this.formGroup.get('')}
  get categoria() {return this.formGroup.get('')}
  get imagem() {return this.formGroup.get('')}

  onSubmit(): void {
    if (this.formGroup.invalid) {
    this.formGroup.markAllAsTouched();
    console.error('Formulário Incompleto');
    return;  
    };
    console.log('Formulário Valido', this.formGroup.value);
  }

// onSubmit() {
//     const value = this.formGroup.value;

//     if (!this.formGroup.valid) {
//       alert('Preencha os campos em vermelho!');
//       return;
//     }

//     this.productService.addProduct(value);
//     alert('Produto adicionado!');
//     this.router.navigate(['/products']);
//   }


}
