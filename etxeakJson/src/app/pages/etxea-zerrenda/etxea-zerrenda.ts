import { Component, computed, inject, signal } from '@angular/core';
import { Etxeak } from '../../services/etxeak';
import { Etxea } from '../../interfaces/etxea';
import { EtxeTxartela } from '../etxe-txartela/etxe-txartela';

@Component({
  selector: 'app-etxea-zerrenda',
  standalone: true,
  imports: [EtxeTxartela],
  templateUrl: './etxea-zerrenda.html',
  styleUrl: './etxea-zerrenda.css',
})
export class EtxeaZerrenda {
  private etxeZerbitzua = inject(Etxeak);

  etxeak = this.etxeZerbitzua.guztiak;
  iragazkia = signal('');

  etxeakFiltratu = computed(() => {
    const testua = this.iragazkia().toLowerCase().trim();

    return this.etxeak().filter((etxea: Etxea) => etxea.city.toLowerCase().includes(testua));
  });

  bilatu(testua: string): void {
    this.iragazkia.set(testua);
  }
}
