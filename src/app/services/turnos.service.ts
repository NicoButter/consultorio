import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  private apiUrl = '...'; // Agrega la URL de tu backend aquí

  constructor(private http: HttpClient) {}

  getEspecialidades(): Observable<string[]> {
    // Implementa la lógica para obtener las especialidades desde tu backend
    // Puedes usar this.http.get(this.apiUrl + '/especialidades') por ejemplo
    // Retorna un array de especialidades (puedes cambiar el tipo según tu implementación)
    return this.http.get<string[]>(`${this.apiUrl}/especialidades`);
  }

  getTurnosPorEspecialidad(especialidad: string): Observable<any[]> {
    // Implementa la lógica para obtener los turnos por especialidad desde tu backend
    // Retorna un array de turnos (puedes cambiar el tipo según tu implementación)
    return this.http.get<any[]>(`${this.apiUrl}/turnos?especialidad=${especialidad}`);
  }
}
