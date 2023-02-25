import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipCustomizadoComponent } from './pip-customizado.component';

describe('PipCustomizadoComponent', () => {
  let component: PipCustomizadoComponent;
  let fixture: ComponentFixture<PipCustomizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipCustomizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipCustomizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
