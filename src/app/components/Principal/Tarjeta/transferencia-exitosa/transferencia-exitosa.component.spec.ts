import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaExitosaComponent } from './transferencia-exitosa.component';

describe('TransferenciaExitosaComponent', () => {
  let component: TransferenciaExitosaComponent;
  let fixture: ComponentFixture<TransferenciaExitosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferenciaExitosaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferenciaExitosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
