import { Component, Input, OnInit } from '@angular/core';
import { Employees } from '../interfaces/Employees';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employees;
  id: number = +this.route.snapshot.paramMap.get('id');
  loader = false;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loader = true;
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getEmployee(this.id).subscribe((response) => {
      this.employee = response;
      this.loader = false;
    });
  }
}
