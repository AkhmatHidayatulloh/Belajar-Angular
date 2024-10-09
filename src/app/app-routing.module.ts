import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductComponent } from './components/product/product.component';
import { TransaksiPenjualanComponent } from './components/transaksi-penjualan/transaksi-penjualan.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'transaksi-penjualan', component: TransaksiPenjualanComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
