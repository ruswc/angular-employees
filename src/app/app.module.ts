import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortAscendingPipe } from './pipes/sort-ascending.pipe';
import { SortDescendingPipe } from './pipes/sort-descending.pipe';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DetailedMatListItemComponent } from './detailed-mat-list-item/detailed-mat-list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SortAscendingPipe,
    SortDescendingPipe,
    ToolbarComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    DetailedMatListItemComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, MaterialModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
