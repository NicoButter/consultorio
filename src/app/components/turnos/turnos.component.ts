// turnos.component.ts
import { Component, OnInit } from '@angular/core';
import { TurnosService } from '../../services/turnos.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {
  especialidades: string[] = [];
  seleccionEspecialidad: string = '';
  turnos: any[] = [];

  constructor(private turnosService: TurnosService) {}

  ngOnInit(): void {
    this.loadEspecialidades();
  }

  loadEspecialidades() {
    this.turnosService.getEspecialidades().subscribe(especialidades => {
      this.especialidades = especialidades;
    });
  }

  loadTurnosPorEspecialidad() {
    this.turnosService.getTurnosPorEspecialidad(this.seleccionEspecialidad).subscribe(turnos => {
      this.turnos = turnos;
    });
  }
}
