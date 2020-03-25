import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employees } from '../interfaces/Employees';

import { EmployeeService } from '../services/employee.service';

import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesComponent implements OnInit {
  sort = '';
  loader = false;

  employees: Employees[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loader = true;
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.loader = false;
    });
  }
}
