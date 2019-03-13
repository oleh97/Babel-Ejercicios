import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpEjercicioPipeComponent } from './cmp-ejercicio-pipe/cmp-ejercicio-pipe.component';
import { OcultoPipe } from './cmp-ejercicio-pipe/oculto.pipe';
import { CmpCurriculumComponent } from './cmp-curriculum/cmp-curriculum.component';
import { CmpCurriculumPadreComponent } from './cmp-curriculum-padre/cmp-curriculum-padre.component';
import { CmpCurriculumFormularioComponent } from './cmp-curriculum-padre/cmp-curriculum-formulario/cmp-curriculum-formulario.component';
import { CmpCurriculumVistaComponent } from './cmp-curriculum-padre/cmp-curriculum-vista/cmp-curriculum-vista.component';


@NgModule({
  declarations: [
    AppComponent,
    CmpEjercicioPipeComponent,
    OcultoPipe,
    CmpCurriculumComponent,
    CmpCurriculumPadreComponent,
    CmpCurriculumFormularioComponent,
    CmpCurriculumVistaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
