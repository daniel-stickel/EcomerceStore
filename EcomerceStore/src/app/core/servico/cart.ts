import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ProdutoOnCartType } from "./produto";

@Injectable({
    providedIn: 'root'
})

export class CarrinhoServico {
    protected carrinhoItens = new BehaviorSubject<Array<ProdutoOnCartType>>([]);

    public adicionaItem(item: ProdutoOnCartType): void {
        let carrinhoItens = this.carrinhoItens.getValue();

        const alreadyOnCart = carrinhoItens.find(el => el.id == item.id);
        if (alreadyOnCart) {
            alreadyOnCart.quantidade = parseInt(`${alreadyOnCart.quantidade || 0}`) + parseInt(`${(item.quantidade || 0)}`);
        }
        else {
            carrinhoItens.push(item);
        }
        this.carrinhoItens.next(carrinhoItens);
    }

    public carrinhoItemsHasChanged() : Observable<Array<ProdutoOnCartType>> {
        return this.carrinhoItens.asObservable();
    }

    removeItemID(getProdutoId: number) {
        let produtos = this.carrinhoItens.getValue();
        console.log(produtos);
        produtos = produtos.filter((el) => el.id != getProdutoId);
        console.log(produtos)
        this.carrinhoItens.next(produtos);
    }
}