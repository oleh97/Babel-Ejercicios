import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-curriculum',
  templateUrl: './cmp-curriculum.component.html',
  styleUrls: ['./cmp-curriculum.component.css']
})
export class CmpCurriculumComponent implements OnInit {
  nombre = 'NOMBRE';
  apellidos = 'APELLIDOS';
  fecha: Date;
  email = '';
  foto = '';
  skills = [];
  constructor() { }

  ngOnInit() {
  }

  setEmail(e: string) {
    this.email = e;
  }

  setNombre(n: string) {
    this.nombre = n;
  }

  setApellidos(a: string) {
    this.apellidos = a;
  }

  setFecha(d: Date) {
    this.fecha = d;
  }

  setFoto(f: string) {
    console.log(f);
    this.foto = f;
  }

  addSkill(s: string) {
    this.skills.push(s);
    //document.getElementById('inputSkill').value = '';
  }

}
