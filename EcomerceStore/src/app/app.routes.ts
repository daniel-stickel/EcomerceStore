import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { ProdutoCards } from './pages/home/cards/cards';
import { Home } from './pages/home/home';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home } 
    { path: 'carrinho', component: Carrinho }
];
