import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
ListaProdutoIndexComponent
import { FormsModule } from '@angular/forms';
import { ListaProdutoIndexComponent } from './lista-produto-index/lista-produto-index.component';
import { ProdutoRoutingModule } from './lista-produto-routing.module';


@NgModule({
  declarations: [ListaProdutoIndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProdutoRoutingModule
  ]
})
export class ListaProdutoModule { }
