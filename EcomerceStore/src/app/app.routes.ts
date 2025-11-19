import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { ProdutoCard } from './pages/home/cards/cards';
import { Home } from './pages/home/home';
import { Forms } from './pages/forms/forms';
import { Novoproduto } from './pages/novoproduto/novoproduto';
import { ProdutoCarrinho } from './produto-carrinho/produto-carrinho';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'produto-carrinho/:id', component: ProdutoCarrinho },
  { path: 'home', component: Home },
  { path: 'novoproduto/:id', component: Novoproduto },
  { path: 'novoproduto', component: Novoproduto },
  { path: 'forms', component: Forms },
];
