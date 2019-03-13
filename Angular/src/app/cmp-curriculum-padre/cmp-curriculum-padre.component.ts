import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-curriculum-padre',
  templateUrl: './cmp-curriculum-padre.component.html',
  styleUrls: ['./cmp-curriculum-padre.component.css']
})
export class CmpCurriculumPadreComponent implements OnInit {
  nombre = 'NOMBRE';
  apellidos = 'APELLIDOS';
  fecha: Date;
  email = '';
  foto = '';
  skills = [];

  constructor() { }

  ngOnInit() {
  }

}
