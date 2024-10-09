import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  createDb(): {} | Observable<{}> | Promise<{}> {
    return {
      customers: [
        { id: 1, nama: 'Andi Wijaya', alamat: 'Surabaya', email: 'andi@gmail.com' },
        { id: 2, nama: 'Budi Santoso', alamat: 'Malang', email: 'budi@gmail.com' },
        { id: 3, nama: 'Citra Dewi', alamat: 'Jakarta', email: 'citra@gmail.com' },
        { id: 4, nama: 'Dewi Kurnia', alamat: 'Bandung', email: 'dewi@gmail.com' },
        { id: 5, nama: 'Eko Prasetyo', alamat: 'Semarang', email: 'eko@gmail.com' },
        { id: 6, nama: 'Fajar Maulana', alamat: 'Yogyakarta', email: 'fajar@gmail.com' },
        { id: 7, nama: 'Gita Permata', alamat: 'Bali', email: 'gita@gmail.com' },
        { id: 8, nama: 'Hendra Saputra', alamat: 'Medan', email: 'hendra@gmail.com' },
        { id: 9, nama: 'Intan Lestari', alamat: 'Makassar', email: 'intan@gmail.com' },
        { id: 10, nama: 'Joko Susilo', alamat: 'Balikpapan', email: 'joko@gmail.com' },
      ],
      products: [
        { id: 1, namaProduk: 'Buku', hargaProduk: 10000, stokProduk: 10 },
        { id: 2, namaProduk: 'Pensil', hargaProduk: 3500, stokProduk: 10 },
        { id: 3, namaProduk: 'Spidol', hargaProduk: 7500, stokProduk: 10 },
        { id: 4, namaProduk: 'Penghapus', hargaProduk: 3000, stokProduk: 10 },
        { id: 5, namaProduk: 'Penggaris', hargaProduk: 5000, stokProduk: 10 },
      ],
      transaksiPenjualan: [
        { id: 1, idProduct: 1, idCustomer: 1, alamatPengiriman: 'Surabaya', jumlahBeli: 2, hargaSatuan: 10000, hargaTotal: 20000, },
        { id: 2, idProduct: 5, idCustomer: 2, alamatPengiriman: 'Malang', jumlahBeli: 4, hargaSatuan: 5000, hargaTotal: 20000, },
        { id: 3, idProduct: 4, idCustomer: 3, alamatPengiriman: 'Jakarta', jumlahBeli: 3, hargaSatuan: 3000, hargaTotal: 9000, },
        { id: 4, idProduct: 5, idCustomer: 2, alamatPengiriman: 'Malang', jumlahBeli: 20, hargaSatuan: 5000, hargaTotal: 200000, },
      ]
    }
  }
}
