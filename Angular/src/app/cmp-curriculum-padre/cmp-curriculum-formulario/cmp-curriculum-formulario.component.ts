import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cmp-curriculum-formulario',
  templateUrl: './cmp-curriculum-formulario.component.html',
  styleUrls: ['./cmp-curriculum-formulario.component.css']
})
export class CmpCurriculumFormularioComponent implements OnInit {

  nombre = 'NOMBRE';
  apellidos = 'APELLIDOS';
  fecha: Date;
  email = '';
  foto = '';
  skills = [];

  @Output() nombreIntroducido = new EventEmitter<string>();
  @Output() apellidosIntroducidos = new EventEmitter<string>();
  @Output() fechaIntroducida = new EventEmitter<Date>();
  @Output() emailIntroducido = new EventEmitter<string>();
  @Output() imagenIntroducida = new EventEmitter<string>();
  @Output() skillsIntroducidos = new EventEmitter<Array<string>>();
  constructor() {
  }

  ngOnInit() {
  }

  setEmail(e: string) {
    this.email = e;
    this.emailIntroducido.emit(this.email);
  }

  setNombre(n: string) {
    this.nombre = n;
    this.nombreIntroducido.emit(this.nombre);
  }

  setApellidos(a: string) {
    this.apellidos = a;
    this.apellidosIntroducidos.emit(this.apellidos);
  }

  setFecha(d: Date) {
    this.fecha = d;
    this.fechaIntroducida.emit(this.fecha);
  }

  setFoto(f: string) {
    this.foto = f;
    this.imagenIntroducida.emit(this.foto);
  }

  addSkill(s: string) {
    this.skills.push(s);
    (document.getElementById('inputSkill') as HTMLInputElement).value = '';
    this.skillsIntroducidos.emit(this.skills);
  }

}
