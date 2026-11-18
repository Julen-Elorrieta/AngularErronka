import { Injectable, inject, signal } from '@angular/core';
import { Etxea } from '../interfaces/etxea';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Etxeak {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/etxeak';

  private _etxeak = signal<Etxea[]>([]);
  public etxeak = this._etxeak.asReadonly();

  getEtxeak(): void {
    this.http.get<Etxea[]>(this.apiUrl).subscribe({
      next: (datos) => {
        this._etxeak.set(datos);
      },
      error: (err) => {
        console.error('Errorea datuak kargatzean:', err);
      },
    });
  }
}
