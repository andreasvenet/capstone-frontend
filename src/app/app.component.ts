import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Device } from './Device';
import { DeviceService } from './device-service.service';
import { Employee } from './employee';
import { EmployeeService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'capstone-project-frontend';
  public employees: Employee[];
  public devices: Device[];

  constructor(private employeeService: EmployeeService, private deviceService: DeviceService){

  }

  ngOnInit() {
    this.getEmployees();
    this.getDevices();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getDevices(): void {
    this.deviceService.getDevices().subscribe(
      (response: Device[]) => {
        this.devices = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
