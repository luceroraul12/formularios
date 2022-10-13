import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  juegosFavoritos: Juego[];
}

interface Juego {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  public persona: Persona = {
    nombre: "Raul",
    juegosFavoritos: [
      {
        id: 2435,
        nombre: "Mario Kart"
      },
      {
        id: 25346,
        nombre: "Overwatch"
      }
    ]
  }

  // para crear inputs dinamico, hay que crear interfaces, y la encargada del input dinamico(ngfor) debe ser un arreglo y que cada uno tenga name diferente ejemplo variabl_concatenacion
  constructor() { }

  ngOnInit(): void {
  }

  guardar(): void{
    alert('formulario cargado')
  }

  agregarJuego(){
    this.persona.juegosFavoritos.push()
  }

}
