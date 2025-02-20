import { Component } from '@angular/core';
import { FrutasService } from '../../services/frutas/frutas.service';
import { Fruta } from '../../interfaces/fruta.interface';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';


@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [DetalleProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})

export class ListadoProductosComponent {
  frutas: Fruta[] = []
  mostrarFavoritos: boolean = false
  constructor(
    private frutasService: FrutasService
   ) {
    this.frutas = this.frutasService.getFrutas()
  }
  toggleFavorito(id: number) {
    this.frutasService.toggleFavorita(id);
  }
  toggleMostrarFavoritos() {
    this.mostrarFavoritos = !this.mostrarFavoritos
  }

  get frutasFiltradas() {
    return this.mostrarFavoritos
      ? this.frutas.filter(fruta => fruta.favorita)
      : this.frutas
  }
}
