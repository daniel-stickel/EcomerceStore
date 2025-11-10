import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { ProdutoCards } from './pages/home/cards/cards';
import { Home } from './pages/home/home';
import { Carrinho } from './app-nave/componetnes/carrinho/carrinho';
import { AppComponent } from './pages/section/section';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home },
    { path: 'carrinho/:id', component: Carrinho },
    { path: 'section', component: AppComponent} // talvez esse não é o lugar mais apropriado
];
