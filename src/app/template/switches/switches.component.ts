import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  public objetoFormulario = {
    genero: "",
    notificaciones: false,
    terminosyCondiciones: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
