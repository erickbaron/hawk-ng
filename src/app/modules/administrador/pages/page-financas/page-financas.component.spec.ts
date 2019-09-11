import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFinancasComponent } from './page-financas.component';

describe('PageFinancasComponent', () => {
  let component: PageFinancasComponent;
  let fixture: ComponentFixture<PageFinancasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFinancasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFinancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
