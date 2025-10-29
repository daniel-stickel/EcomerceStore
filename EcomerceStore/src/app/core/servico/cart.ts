import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ProdutoTipo } from "./produto";

@Injectable({
    providedIn: 'root'
})

export class CarrinhoServico {
    private carrinhoItens = new BehaviorSubject<Array<ProdutoTipo>>([]);

    public adicionaItem(item: ProdutoTipo): void {
        let carrinhoItens = this.carrinhoItens.getValue();
        carrinhoItens.push(item);
        this.carrinhoItens.next(carrinhoItens);
        console.log(carrinhoItens)
    }

    public carrinhoItemsHasChanged() : Observable<Array<ProdutoTipo>> {
        return this.carrinhoItens.asObservable();
    }
}