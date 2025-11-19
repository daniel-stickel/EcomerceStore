import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { ProdutoCard } from './pages/home/cards/cards';
import { Home } from './pages/home/home';
import { Forms } from './pages/forms/forms';
import { Novoproduto } from './pages/novoproduto/novoproduto';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home },
    { path: 'forms', component: Forms },
    { path: 'novoproduto', component: Novoproduto}
];
