import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito/carrito.service';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  constructor(
    private carritoService:CarritoService
  ) {}

  getCarrito() {
    return this.carritoService.getCarrito()
  }
  eliminarDelCarrito(id: number){
    this.carritoService.eliminarDelCarrito(id)
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito()
  }
}
