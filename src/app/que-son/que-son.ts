import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-que-son',
  imports: [NgIf],
  templateUrl: './que-son.html',
  styleUrl: './que-son.css',
})
export class QueSon {
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
