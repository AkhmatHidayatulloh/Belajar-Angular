import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  itemCountCustomer: number = 0;
  itemCountProduct: number = 0;
  itemCountTransaksi: number = 0;
  TotalPendapatan: number = 0;

  constructor(private service: MasterService) { }

  ngOnInit(): void {
    this.service.getItemCountCustomer().subscribe((count) => {
      this.itemCountCustomer = count;
    });
    this.service.getItemCountProduct().subscribe((count) => {
      this.itemCountProduct = count;
    });
    this.service.getItemCountTransaksi().subscribe((count) => {
      this.itemCountTransaksi = count;
    });
    this.service.getTotalHargaTransaksi().subscribe((total) => {
      this.TotalPendapatan = total;
    });
  }
}
