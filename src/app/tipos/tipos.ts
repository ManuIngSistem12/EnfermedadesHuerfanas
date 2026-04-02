import { Component } from '@angular/core';

@Component({
  selector: 'app-tipos',
  imports: [],
  templateUrl: './tipos.html',
  styleUrl: './tipos.css',
})
export class Tipos {

  modalVisible = false;
  modalActivo = '';
  
  abrirModal(seccion: string): void {
    this.modalActivo = seccion;
    this.modalVisible = true;
    document.body.style.overflow = 'hidden';
  }
  
  cerrarModal(): void {
    this.modalVisible = false;
    this.modalActivo = '';
    document.body.style.overflow = '';
  }
  
  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.cerrarModal();
    }
  }

}
