import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoServico {
  private produtosMustBeReloadedSubject: Subject<boolean> = new Subject();
  private produtosSubject: BehaviorSubject<Array<ProdutoTipo>> = new BehaviorSubject<
    Array<ProdutoTipo>
  >([]);

  constructor(private http: HttpClient, private router: Router) {}

  public reloadProductList() {
    this.produtosMustBeReloadedSubject.next(true);
  }

  public produtosMustBeReloaded(): Observable<boolean> {
    return this.produtosMustBeReloadedSubject.asObservable();
  }

  public getProduto(): Observable<any> {
    return this.http.get('http://localhost:3000/produtos');
  }

  public getProdutoId(id: string): any {
    return this.http.get(`http://localhost:3000/produtos/${id}`);
  }

  public deleteProdutoId(id: string) {
    return this.http.delete(`http://localhost:3000/produtos/${id}`);
  }

  public addProduto(value: Partial<ProdutoTipo>) {
    this.getProduto().subscribe((produtos) => {
      let maxId = 0;
      produtos.forEach((el: any) => {
        if (parseInt(el.id) > maxId) {
          maxId = parseInt(el.id);
        }
      });
      maxId = maxId + 1;

      value.id = `${maxId}`;
      this.http.post('http://localhost:3000/produtos', value).subscribe(() => {
        alert(' Produto Inserido');
        this.reloadProductList();
        this.router.navigate(['/produtos']);
      });
    });
  }
}

export interface ProdutoTipo {
  id: string;
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
