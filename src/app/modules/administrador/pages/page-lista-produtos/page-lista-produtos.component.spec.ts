import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListaProdutosComponent } from './page-lista-produtos.component';

describe('PageListaProdutosComponent', () => {
  let component: PageListaProdutosComponent;
  let fixture: ComponentFixture<PageListaProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListaProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
