import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from './Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.apiServerUrl}/device/all`);
  }

  public addDevice(device: Device): Observable<Device> {
    return this.http.post<Device>(`${this.apiServerUrl}/device/add`, device);
  }

  public updateDevice(device: Device): Observable<Device>{
      return this.http.put<Device>(`${this.apiServerUrl}/device/update`, device);
  }

 public deleteDevice(deviceId: number): Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${deviceId}`);
 }
}
