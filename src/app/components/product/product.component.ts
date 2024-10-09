import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { MasterService } from '../../services/master.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  productList!: Product[];
  dataSource: any;
  displayedColumns: string[] = ['id', 'namaProduk', 'hargaProduk', 'stokProduk', 'action'];
  isAdd = false;
  isEdit = false;
  editData!: Product;

  constructor(private service: MasterService, private builder: FormBuilder) { }

  productForm = this.builder.group({
    id: this.builder.control({ value: 0, disabled: true }),
    namaProduk: this.builder.control('', Validators.required),
    hargaProduk: this.builder.control(0, Validators.required),
    stokProduk: this.builder.control(0, [Validators.required])
  })

  ngOnInit(): void {
    this.loadProductList();
  }

  loadProductList() {
    this.service.GetAllProduk().subscribe(item => {
      this.productList = item;
      this.dataSource = new MatTableDataSource(this.productList);
    })
  }
  addProduct() {
    this.isAdd = true;
  }

  BackTable() {
    this.isAdd = false;
    this.isEdit = false;
  }

  saveProduct() {
    if (this.productForm.valid) {
      let _obj: Product = {
        id: this.productForm.value.id as number,
        namaProduk: this.productForm.value.namaProduk as string,
        hargaProduk: this.productForm.value.hargaProduk as number,
        stokProduk: this.productForm.value.stokProduk as number,
      }
      if (this.isAdd) {
        this.service.CreateProduk(_obj).subscribe(item => {
          this.loadProductList();
          alert('Berhasil Menambah Produk');
        })
      } else {
        _obj.id = this.productForm.getRawValue().id as number;
        this.service.UpdateProduk(_obj).subscribe(item => {
          this.loadProductList();
          alert('berhasil Update Data Produk');
        })
      }
    }
    this.BackTable();
  }

  editProduct(id: number) {
    this.service.GetProduk(id).subscribe(item => {
      this.editData = item;
      this.productForm.setValue({
        id: this.editData.id,
        namaProduk: this.editData.namaProduk,
        hargaProduk: this.editData.hargaProduk,
        stokProduk: this.editData.stokProduk,
      })
      this.isEdit = true;
    })
  }

  deleteProduct(id: number) {
    if (confirm('Anda Yakin Menghapus Data Ini? ')) {
      this.service.DeleteProduk(id).subscribe(item => {
        this.loadProductList();
        alert('Berhasil Menghapus data Produk!');
      })
    }
  }


}
