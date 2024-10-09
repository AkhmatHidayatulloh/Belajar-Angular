import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MenuComponent } from './components/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CustomerComponent } from './components/customer/customer.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ProductComponent } from './components/product/product.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TransaksiPenjualanComponent } from './components/transaksi-penjualan/transaksi-penjualan.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerComponent,
    DashboardComponent,
    ProductComponent,
    TransaksiPenjualanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    CdkMenuModule,
    MatPaginator,
    MatPaginatorModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync(),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
