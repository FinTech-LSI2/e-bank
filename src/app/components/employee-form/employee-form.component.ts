import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateEmployee } from '../../models/create-employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [EmployeeService],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      salary: ['', Validators.required],
      branchNumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const newEmployee: CreateEmployee = this.employeeForm.value;
      this.employeeService.createEmployee(newEmployee).subscribe(
        (data) => {
          this.router.navigate(['/employees']);
        },
        (error) => {
          console.error('Error creating employee', error);
        }
      );
    }
  }
}