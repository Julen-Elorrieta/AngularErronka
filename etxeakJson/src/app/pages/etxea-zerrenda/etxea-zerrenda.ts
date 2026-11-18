import { Component, inject, signal } from '@angular/core';
import { EtxeTxartela } from '../etxe-txartela/etxe-txartela';
import { Etxeak } from '../../services/etxeak';
import { Etxea } from '../../interfaces/etxea';

@Component({
  imports: [EtxeTxartela],
  selector: 'app-etxea-zerrenda',
  styleUrl: './etxea-zerrenda.css',
  templateUrl: './etxea-zerrenda.html',
})

export class EtxeaZerrenda {

  etxeakZerbitzua = inject(Etxeak);

  etxeak = signal<Etxea[]>([]);

  etxeakFiltratuta = signal<Etxea[]>([]);

  constructor() {
    this.etxeakZerbitzua.guztiak().subscribe({
      next: (datuak) => {
        this.etxeak.set(datuak);
        this.etxeakFiltratuta.set(datuak);
      },
      error: (errorea) => {
        console.error('Errorea etxeak kargatzean:', errorea);
      }
    });
  }

  bilatu(testua: string): void {
    const bilaketa = testua.toLowerCase().trim();

    this.etxeakFiltratuta.set(
      this.etxeak().filter(etxea =>
        etxea.city.toLowerCase().includes(bilaketa)
      )
    );
  }

}
