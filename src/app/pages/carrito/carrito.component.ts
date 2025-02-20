import { Component } from '@angular/core';
import { Fruta } from '../../interfaces/fruta.interface';
import { CarritoService } from '../../services/carrito/carrito.service';

interface Producto {
  fruta: Fruta;
  cantidad: number;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  
  carrito: Producto[] = []

  constructor(
    private carritoService:CarritoService
  ) {
    this.carrito = this.carritoService.getCarrito()
  }

  eliminarDelCarrito(id: number){
    
  }
}
