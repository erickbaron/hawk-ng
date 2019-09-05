import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/models/categoria';
import { CategoriaService } from 'src/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.sass']
})
export class CategoriaComponent implements OnInit {
  categoria: string;
  categorias: Categoria[] = [];
  
  constructor(private service: CategoriaService){ }
  
  ngOnInit(){
    this.service.obtertodos().subscribe(
      x => {
        this.categorias = x;
      }
      );
    }
    
    salvar() {
      let nomeCompleto = this.categoria
      let categoria = new Categoria();
      categoria.id = 1000;
      categoria.nome = this.categoria;
      this.service.adicionar(categoria).subscribe(x => {
        
        this.categoria = '';
        
        document.getElementById("campo-categoria").focus();
      })
      
      
      
      
    }
    
  }
  
  