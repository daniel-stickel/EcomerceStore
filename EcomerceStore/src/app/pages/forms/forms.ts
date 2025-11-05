import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      estadoEntrega: ['', Validators.required],
      cidadeEntrega: ['', Validators.required],
      enderecoEntrega: ['', Validators.required],
      complementoEntrega: ['', Validators.required],
      
    });
  }
  get nome() {return this.formGroup.get('')}
  get cpf() {return this.formGroup.get('')}
  get dataNascimento() {return this.formGroup.get('')}
  get email() {return this.formGroup.get('')}
  get telefone() {return this.formGroup.get('')}
  get estado() {return this.formGroup.get('')}
  get cidade() {return this.formGroup.get('')}
  get endereco() {return this.formGroup.get('')}
  get numero() {return this.formGroup.get('')}
  get estadoEntrega() {return this.formGroup.get('')}
  get cidadeEntrega() {return this.formGroup.get('')}
  get enderecoEntrega() {return this.formGroup.get('')}

  onSubmit(): void {
    if (this.formGroup.invalid) {
    this.formGroup.markAllAsTouched();
    console.error('Formulário Incompleto');
    return;  
    };
    console.log('Formulário Valido', this.formGroup.value);
  }
}

