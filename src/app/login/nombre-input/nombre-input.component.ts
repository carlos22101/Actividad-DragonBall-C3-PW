import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nombre-input',
  templateUrl: './nombre-input.component.html',
  styleUrls: ['./nombre-input.component.css']
})
export class NombreInputComponent {
  nombre: string = '';
  nombreValido: boolean = false;

  constructor( private router : Router) {}

  validarNombre() {
    const regex = /^[a-zA-Z\s]*$/;
    this.nombreValido = regex.test(this.nombre);
  }

  iniciarAplicacion() {
    if (this.nombreValido) {
      this.router.navigate(['/Dashboard'])
    }
  }
}
