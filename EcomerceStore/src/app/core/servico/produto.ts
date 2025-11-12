import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoServico {
  private produtosMustBeReloadedSubject: Subject<boolean> = new Subject();
  private produtosSubject: BehaviorSubject<Array<ProdutoTipo>> = new BehaviorSubject<Array<ProdutoTipo>>([]);

  constructor(private http: HttpClient) {}

  public reloadProductList() {
    this.produtosMustBeReloadedSubject.next(true);
  }

  public produtosMustBeReloaded(): Observable<boolean> {
    return this.produtosMustBeReloadedSubject.asObservable();
  }

  public getProduto(): Observable<any> {
    return this.http.get('http://localhost:3000/produtos');
  }

  public getProdutoId(id: number): any {
    return this.http.get(`http://localhost:3000/produtos/${id}`);
  }

  public deleteProdutoId(id: number) {
    return this.http.delete(`http://localhost:3000/produtos/${id}`);
  }

  public addProduto(value: Partial<ProdutoTipo>) {
    let maxId = 0;
    const produtos = this.produtosSubject.getValue();
    produtos.forEach((el) => {
      if (el.id > maxId) {
        maxId = el.id;
      }
    });

    value.id = maxId+1;

    this.http.post("http://localhost:3000/produtos", value).subscribe(() => {
      alert(" Produto Inserido");
      this.reloadProductList();
    })
  }
}

export interface ProdutoTipo {
 
  id: number;
  imagem: string;
  nome: string;
  console: string;
  descricao: string;
  preco: number;
}

export interface ProdutoOnCartType extends ProdutoTipo {
  quantidade?: number;
  observacao?: string;
}
