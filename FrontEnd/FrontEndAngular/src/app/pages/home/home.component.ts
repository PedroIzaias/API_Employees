import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employees';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];
  generalEmployee: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }
  
  ngOnInit(): void {
    
    this.employeeService.GetEmployees().subscribe(data => { 
      const dados = data.data;
      
      dados.map((item) => { 
        item.creationDate = new Date(item.creationDate!).toLocaleString('pt-BR')
        item.changeDate = new Date(item.changeDate!).toLocaleString('pt-BR')
      })

      this.employees = data.data;
      this.generalEmployee = data.data;
      
    });
  }

  search(event: Event) { 
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
  
    if (value !== null && value !== undefined) {
      this.employees = this.generalEmployee.filter(employee => { 
        if (employee.name !== null && employee.name !== undefined) {
          return employee.name.toLowerCase().includes(value.toLowerCase());
        }
        return false;
      });
    } else {
      this.employees = this.generalEmployee;
    }
  }

}
