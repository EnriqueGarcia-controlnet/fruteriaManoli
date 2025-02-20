import { Injectable, signal } from '@angular/core';
import { Fruta } from '../../interfaces/fruta.interface';
import { Producto } from '../../interfaces/carrito.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  //private producto: Producto[] = []
  

  /* getCarrito(): Producto[]{
    return this.producto
  }

  agregarAlCarrito(fruta: Fruta){
    const item = this.producto.find((producto) => producto.fruta.id === fruta.id)

    if (item) {
      item.cantidad += 1
    } else {
      this.producto.push({
        fruta, cantidad: 1
      })
    }
  }

  eliminarDelCarrito(id: number){
    this.producto = this.producto.filter(item => item.fruta.id !== id)
  }

  vaciarCarrito() {
    this.producto = []
  }*/

  producto = signal<Producto[]>([])

  getCarrito(): Producto[]{
    return this.producto()
  }

  agregarAlCarrito(fruta: Fruta){
    const productosActuales = this.producto()
    const item = productosActuales.find(item => item.fruta.id === fruta.id)

    if (item) {
      item.cantidad += 1
    } else {
      productosActuales.push({ fruta, cantidad: 1})
    }
    
    this.producto.set([...productosActuales])
  }
  
  eliminarDelCarrito(id: number) {
    if(this.producto().length === 0) return

    const item = this.producto().find(item => item.fruta.id === id)

    if(item && item.cantidad > 1) {
      item.cantidad -= 1
    } else {
      this.producto.set(this.producto().filter(item => item.fruta.id !== id))
    }
  }

  vaciarCarrito() {
    this.producto.set([])
  }
}

