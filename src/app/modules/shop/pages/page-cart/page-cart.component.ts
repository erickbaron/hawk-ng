import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../../../services/cart.service';
import { FormControl, Validators } from '@angular/forms';
import { CartItem } from '../../../../shared/interfaces/cart-item';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { RootService } from '../../../../../services/root.service';
import { Carrinho } from 'src/models/carrinho';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/services/carrinho.service';
import { ItemCompra } from 'src/models/item-compra';
import { ItemCompraService } from 'src/services/item-compra.service';
import { ToastrService } from 'ngx-toastr';


interface Item {
  cartItem: ItemCompra;
  quantity: number;
  quantidade: FormControl;
}

@Component({
  selector: 'app-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject();

  returnUrl: string;
  valorTotal: number = 0;
  item: ItemCompra;


  removedItems: ItemCompra[] = [];
  items: ItemCompra[] = [];
  updating = false;

  constructor(
    public root: RootService,
    public cart: CartService,
    public service: ItemCompraService,
    private router: Router,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.returnUrl = '/carrinho'
    this.atualizarDados();
  }


  valorCarrihno(): void {

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  apagar(id) {
    this.service.apagar(id).subscribe(x => {
      this.atualizarDados()
      this.toastr.success("Item removido!")
    },
      error => {
        // erro
        this.toastr.error("Não foi possível remover")
      })
  }

  atualizarDados() {
    this.valorTotal = 0;
    this.service.obterTodos().subscribe(x => {
      this.items = x;
      this.items.forEach(item => {
        this.valorTotal += item.produto.valorVenda * item.quantidade;
      })
    })
  }

  update(item: ItemCompra): void {
    this.updating = true;
    this.service.alterar(item.id).subscribe({ complete: () => this.updating = false });
  }
}
