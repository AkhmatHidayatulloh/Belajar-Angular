import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../components/customer/customer';
import { Product } from '../components/product/product';
import { TransaksiPenjualan } from '../components/transaksi-penjualan/transaksi-penjualan';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  apiulrcusomer = 'api/customers/';
  apiurlproduk = 'api/products/';
  apiurltransaksipenjualan = 'api/transaksiPenjualan/';

  // Customer
  GetAllCustomer() {
    return this.http.get<Customer[]>(this.apiulrcusomer)
  }
  GetCustomer(id: number) {
    return this.http.get<Customer>(this.apiulrcusomer + id)
  }
  CreateCustomer(customer: Customer) {
    return this.http.post(this.apiulrcusomer, customer)
  }
  UpdateCustomer(customer: Customer) {
    return this.http.put(this.apiulrcusomer + customer.id, customer)
  }
  DeleteCustomer(id: number) {
    return this.http.delete(this.apiulrcusomer + id)
  }
  getItemCountCustomer() {
    return this.http.get<Customer[]>(this.apiulrcusomer).pipe(
      map(items => items.length)
    )
  }
  // Produk

  GetAllProduk() {
    return this.http.get<Product[]>(this.apiurlproduk)
  }
  GetProduk(id: number) {
    return this.http.get<Product>(this.apiurlproduk + id)
  }
  CreateProduk(product: Product) {
    return this.http.post(this.apiurlproduk, product)
  }
  UpdateProduk(product: Product) {
    return this.http.put(this.apiurlproduk + product.id, product)
  }
  DeleteProduk(id: number) {
    return this.http.delete(this.apiurlproduk + id)
  }

  getItemCountProduct() {
    return this.http.get<Product[]>(this.apiurlproduk).pipe(
      map(items => items.length)
    )
  }

  // transaksi Penjualn

  GetALLTransaksiPenjualan() {
    return this.http.get<TransaksiPenjualan[]>(this.apiurltransaksipenjualan)
  }
  CreateTransaksiPenjualan(transaksi: TransaksiPenjualan) {
    return this.http.post(this.apiurltransaksipenjualan, transaksi)
  }

  getItemCountTransaksi() {
    return this.http.get<TransaksiPenjualan[]>(this.apiurltransaksipenjualan).pipe(
      map(items => items.length)
    )
  }

  getTotalHargaTransaksi() {
    return this.http.get<TransaksiPenjualan[]>(this.apiurltransaksipenjualan).pipe(
      map(items => items.reduce((total, item) => total + item.hargaTotal, 0)) // Menjumlahkan hargaTotal
    );
  }

}
