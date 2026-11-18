import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Etxea } from '../../interfaces/etxea';

@Component({
  selector: 'app-etxe-txartela',
  imports: [RouterLink],
  templateUrl: './etxe-txartela.html',
  styleUrl: './etxe-txartela.css'
})
export class EtxeTxartela {
  etxea = input.required<Etxea>();
}