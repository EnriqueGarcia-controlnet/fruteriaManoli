import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fruta } from '../../../../interfaces/fruta.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'component-detalle-producto',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {

  @Input() fruta!: Fruta
  @Output() frutaFavorita = new EventEmitter<number>()
  
  toggleFavorito(id: number) {
    this.frutaFavorita.emit(id)
  }

  agregarAlCarrito(){
    
  }
}
