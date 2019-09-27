import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProdutoIndexComponent } from './lista-produto-index/lista-produto-index.component';


const routes: Routes = [
  { path: '', component: ListaProdutoIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
