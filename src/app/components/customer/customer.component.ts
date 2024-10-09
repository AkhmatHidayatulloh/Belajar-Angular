import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { MasterService } from '../../services/master.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})

export class CustomerComponent implements OnInit {

  customerlist!: Customer[];
  dataSource: any;
  displayedColumns: string[] = ['id', 'nama', 'alamat', 'email', 'action'];
  isAdd = false;
  isEdit = false;
  editData!: Customer;

  constructor(private service: MasterService, private builder: FormBuilder) { }

  customerForm = this.builder.group({
    id: this.builder.control({ value: 0, disabled: true }),
    nama: this.builder.control('', Validators.required),
    alamat: this.builder.control('', Validators.required),
    email: this.builder.control('', [Validators.email, Validators.required])
  })

  ngOnInit(): void {
    this.LoadCustomerList();
  }

  LoadCustomerList() {
    this.service.GetAllCustomer().subscribe(item => {
      this.customerlist = item;
      this.dataSource = new MatTableDataSource(this.customerlist);
    })
  }

  saveCustomer() {
    if (this.customerForm.valid) {
      let _obj: Customer = {
        id: this.customerForm.value.id as number,
        nama: this.customerForm.value.nama as string,
        alamat: this.customerForm.value.alamat as string,
        email: this.customerForm.value.email as string,
      }
      if (this.isAdd) {
        this.service.CreateCustomer(_obj).subscribe(item => {
          this.LoadCustomerList();
          alert('Berhasil Tambah Data Customer');

        })
      } else {
        _obj.id = this.customerForm.getRawValue().id as number;
        this.service.UpdateCustomer(_obj).subscribe(item => {
          this.LoadCustomerList();
          alert('Berhasil Update Data Customer');
        })
      }

    }
    this.BackTable();
  }
  AddCustomer() {
    this.customerForm.reset();
    this.isAdd = true;
  }

  BackTable() {
    this.isAdd = false;
    this.isEdit = false;
  }

  editCustomer(id: number) {
    this.service.GetCustomer(id).subscribe(item => {
      this.editData = item;
      this.customerForm.setValue({
        id: this.editData.id,
        nama: this.editData.nama,
        alamat: this.editData.alamat,
        email: this.editData.email,
      })
      this.isEdit = true;
    })
  }

  deletCustomer(id: number) {
    if (confirm('Anda Yaking Menghapus Data ini ? ')) {
      this.service.DeleteCustomer(id).subscribe(item => {
        this.LoadCustomerList();
        alert('Berhasil Menghapus Data');
      })
    }
  }

}
