import { Component, Input, OnInit } from '@angular/core';
import { TransaksiPenjualan } from './transaksi-penjualan';
import { MasterService } from '../../services/master.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Component({
  selector: 'app-transaksi-penjualan',
  templateUrl: './transaksi-penjualan.component.html',
  styleUrl: './transaksi-penjualan.component.css'
})
export class TransaksiPenjualanComponent implements OnInit {

  transaksiPenjualanList!: TransaksiPenjualan[];
  dataSource: any;
  displayedColumns: string[] = ['id', 'idProduct', 'idCustomer', 'alamatPengiriman', 'jumlahBeli', 'hargaSatuan', 'hargaTotal'];
  isAdd = false;
  date = new FormControl(new Date());

  products: any[] = [];
  customer: any[] = [];

  @Input() harga?: Product;

  constructor(private service: MasterService, private builder: FormBuilder) { }

  transaksiForm = this.builder.group({
    id: this.builder.control({ value: 0, disabled: true }),
    idProduct: this.builder.control(0, Validators.required),
    idCustomer: this.builder.control(0, Validators.required),
    alamatPengiriman: this.builder.control('', Validators.required),
    jumlahBeli: this.builder.control(0, Validators.required),
    hargaSatuan: this.builder.control(0, Validators.required),
    hargaTotal: this.builder.control(0, Validators.required),

  })

  LoadTransaksiPenjualan() {
    this.service.GetALLTransaksiPenjualan().subscribe(item => {
      this.transaksiPenjualanList = item;
      this.dataSource = new MatTableDataSource(this.transaksiPenjualanList);
    })
  }

  BackTable() {
    this.isAdd = false;
  }

  addtransaksi() {
    this.isAdd = true;
  }

  saveTransaksi() {
    if (this.transaksiForm.valid) {
      let _obj: TransaksiPenjualan = {
        id: this.transaksiForm.value.id as number,
        idProduct: this.transaksiForm.value.idProduct as number,
        idCustomer: this.transaksiForm.value.idCustomer as number,
        alamatPengiriman: this.transaksiForm.value.alamatPengiriman as string,
        jumlahBeli: this.transaksiForm.value.jumlahBeli as number,
        hargaSatuan: this.transaksiForm.value.hargaSatuan as number,
        hargaTotal: this.transaksiForm.value.hargaTotal as number,
      }

      this.service.CreateTransaksiPenjualan(_obj).subscribe(item => {
        this.LoadTransaksiPenjualan();
        alert('Berhasil Menambah Transaksi Penjualan');
      })
    }
    this.BackTable();
  }

  ngOnInit(): void {
    // Memuat data transaksi penjualan
    this.LoadTransaksiPenjualan();
    this.loadProducts();
    this.loadCustomer();

    // Pantau perubahan pada idProduct dan setel harga produk

    this.transaksiForm.get('idProduct')?.valueChanges.subscribe((productId) => {
      const selectedProduct = this.products.find(product => product.id === productId);
      if (selectedProduct) {
        this.transaksiForm.get('hargaSatuan')?.setValue(selectedProduct.hargaProduk); // Setel harga produk
      }
    });

    // ambil id customer lalu masukkan alamat secara otomatis

    this.transaksiForm.get('idCustomer')?.valueChanges.subscribe((idCust) => {
      const selectedCustomer = this.customer.find(customer => customer.id === idCust);
      if (selectedCustomer) {
        this.transaksiForm.get('alamatPengiriman')?.setValue(selectedCustomer.alamat);
      }
    })

    // Pantau perubahan pada jumlahBeli dan hitung harga total
    // Pantau perubahan pada jumlahBeli dan hitung harga total
    this.transaksiForm.get('jumlahBeli')?.valueChanges.subscribe((jumlahBeli) => {
      // Berikan nilai default 0 jika null atau undefined
      const jumlah = jumlahBeli ?? 0;
      const hargaSatuan = this.transaksiForm.get('hargaSatuan')?.value || 0;
      const total = jumlah * hargaSatuan; // Hitung total
      this.transaksiForm.get('hargaTotal')?.setValue(total); // Setel harga total
    });

  }

  loadProducts() {
    this.service.GetAllProduk().subscribe({
      next: (data: any) => {
        this.products = data;
        console.log('Products:', this.products); // Cek data produk
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  loadCustomer() {
    this.service.GetAllCustomer().subscribe({
      next: (data: any) => {
        this.customer = data;
        console.log('Customer:', this.customer); // Cek data produk
      },
      error: (err) => {
        console.error('Error fetching Customer:', err);
      },
    });
  }
}

