import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Etxea } from '../../interfaces/etxea';
import { Interesduna } from '../../interfaces/Interesduna';

@Component({
  selector: 'app-xehetasuna',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './etxe-xehetasuna.html',
  styleUrl: './etxe-xehetasuna.css',
})
export class EtxeXehetasuna implements OnInit {
  etxea: Etxea | undefined;

  izena = '';
  abizena = '';
  emaila = '';

  interesdunGuztiak = signal<Interesduna[]>([]);

  etxekoInteresdunak = computed(() => {
    const unekoEtxea = this.etxea;
    if (!unekoEtxea) return [];
    return this.interesdunGuztiak().filter((i) => String(i.etxeaId) === String(unekoEtxea.id));
  });

  ngOnInit(): void {
    const gordetakoak = localStorage.getItem('interesdunak');
    if (gordetakoak) {
      this.interesdunGuztiak.set(JSON.parse(gordetakoak));
    }
  }

  bidaliFormularioa(form: NgForm): void {
    if (!this.etxea || form.invalid) return;

    const interesdunBerria: Interesduna = {
      etxeaId: String(this.etxea.id),
      izena: this.izena,
      abizena: this.abizena,
      emaila: this.emaila,
    };

    this.interesdunGuztiak.update((zerrenda) => [...zerrenda, interesdunBerria]);

    localStorage.setItem('interesdunak', JSON.stringify(this.interesdunGuztiak()));

    form.resetForm();
  }
}
