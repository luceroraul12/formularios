import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }



  guardar(): void{ 
    console.log(this.miFormulario.value);
    this.miFormulario.resetForm();
  }

  esProductoValido(): boolean{
    return this.miFormulario?.controls['producto']?.invalid &&
            this.miFormulario?.controls['producto']?.touched;
  }

  esPrecioValido(): boolean{
    return this.miFormulario?.controls['precio']?.invalid &&
            this.miFormulario?.controls['precio']?.value <= 0 &&
            this.miFormulario?.controls['precio']?.touched;
  } 

  esExistenciaValida(): boolean{
    return false;
  }
}
