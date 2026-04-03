import { Component, HostListener, TemplateRef } from '@angular/core';
import { NgTemplateOutlet, NgIf } from '@angular/common';

@Component({
  selector: 'app-tecnologias',
  imports: [NgTemplateOutlet, NgIf],
  templateUrl: './tecnologias.html',
  styleUrl: './tecnologias.css',
})
export class Tecnologias {

  modalActivo: boolean = false;
  templateActivo: TemplateRef<any> | null = null;

  abrirModal(template: TemplateRef<any>): void {
    this.templateActivo = template;
    setTimeout(() => this.modalActivo = true, 10);
  }

  cerrarModal(): void {
    this.modalActivo = false;
    setTimeout(() => this.templateActivo = null, 450);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.modalActivo) this.cerrarModal();
  }
}

