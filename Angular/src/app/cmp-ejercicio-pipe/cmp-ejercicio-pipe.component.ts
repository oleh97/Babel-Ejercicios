import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-ejercicio-pipe',
  templateUrl: './cmp-ejercicio-pipe.component.html',
  styleUrls: ['./cmp-ejercicio-pipe.component.css']
})
export class CmpEjercicioPipeComponent implements OnInit {

  texto = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de\n' +
    '  relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la\n' +
    '  imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos\n' +
    '  especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,\n' +
    '  quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset",\n' +
    '  las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus\n' +
    '  PageMaker, el cual incluye versiones de Lorem Ipsum.'
  constructor() { }

  ngOnInit() {
  }

}
