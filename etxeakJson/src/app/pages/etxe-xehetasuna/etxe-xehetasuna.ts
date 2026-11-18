import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etxeak } from '../../services/etxeak';
import { Etxea } from '../../interfaces/etxea';

@Component({
  imports: [],
  selector: 'app-etxe-xehetasuna',
  styleUrl: './etxe-xehetasuna.css',
  templateUrl: './etxe-xehetasuna.html',
})
export class EtxeXehetasuna {
  route = inject(ActivatedRoute)
  etxeZerbitzua = inject(Etxeak)

  id = this.route.snapshot.paramMap.get('id')??''; 
  
  etxea = signal<Etxea |undefined>(undefined); 
  kargatzen = signal(true); 
  errorea = signal(false); 

  constructor() {
    this.etxeZerbitzua.bat(this.id).subscribe({
      next: (datuak) => {
        this.etxea.set(datuak); 
        this.kargatzen.set(false)
      }, 
      error: () => {
        this.errorea.set(true); 
        this.kargatzen.set(false)
      }
    }); 
  }
}
