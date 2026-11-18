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
  etxeZerbitzua = inject(Etxeak); 

  etxeak = signal(this.etxeZerbitzua.guztiak())

  etxeakFiltratu = signal<Etxea[]>(this.etxeak()); 

  bilatu(testua: string): void {
    const bilaketa = testua.toLocaleLowerCase().trim(); 

    this.etxeakFiltratu.set(
      this.etxeak().filter(etxea => 
        etxea.city.toLocaleLowerCase().includes(bilaketa)
      )
    ); 
  }
}
