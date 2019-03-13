import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cmp-curriculum-vista',
  templateUrl: './cmp-curriculum-vista.component.html',
  styleUrls: ['./cmp-curriculum-vista.component.css']
})
export class CmpCurriculumVistaComponent implements OnInit {

  @Input() nombre = '';
  @Input() apellidos = '';
  @Input() fecha: Date;
  @Input() email = '';
  @Input() foto = '';
  @Input() skills = [];
  constructor() { }

  ngOnInit() {
  }

}
