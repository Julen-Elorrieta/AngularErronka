import { Component, inject, signal } from '@angular/core';
import { EtxeTxartela } from '../etxe-txartela/etxe-txartela';
import { Etxeak } from '../../services/etxeak';

@Component({
  imports: [EtxeTxartela],
  selector: 'app-etxea-zerrenda',
  styleUrl: './etxea-zerrenda.css',
  templateUrl: './etxea-zerrenda.html',
})
export class EtxeaZerrenda {
  etxeZerbitzua = inject(Etxeak); 

  etxeak = signal(this.etxeZerbitzua.guztiak())
}
