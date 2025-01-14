import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiPenjualanComponent } from './transaksi-penjualan.component';

describe('TransaksiPenjualanComponent', () => {
  let component: TransaksiPenjualanComponent;
  let fixture: ComponentFixture<TransaksiPenjualanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransaksiPenjualanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransaksiPenjualanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
