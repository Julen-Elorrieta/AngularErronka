import { Component, OnInit, computed, signal, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Etxea } from '../../interfaces/etxea';
import { Interesduna } from '../../interfaces/Interesduna';
import { ActivatedRoute } from '@angular/router';
import { Etxeak } from '../../services/etxeak';


@Component({
  selector: 'app-xehetasuna',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './etxe-xehetasuna.html',
  styleUrl: './etxe-xehetasuna.css',
})
export class EtxeXehetasuna implements OnInit {
  route = inject(ActivatedRoute);
  etxeZerbitzua = inject(Etxeak);

id = this.route.snapshot.paramMap.get('id') ?? '';
  etxea = signal<Etxea | undefined>(undefined);

  izena = '';
  abizena = '';
  emaila = '';

  interesdunGuztiak = signal<Interesduna[]>([]);

  etxekoInteresdunak = computed(() => {
    const unekoEtxea = this.etxea();
    if (!unekoEtxea) return [];
    return this.interesdunGuztiak().filter((i) => String(i.etxeaId) === String(unekoEtxea.id));
  });

 ngOnInit(): void {
  // Pedimos la casa a JSON Server.
  this.etxeZerbitzua.bat(this.id).subscribe({
    next: (datuak) => {
      this.etxea.set(datuak);
    },
    error: (errorea) => {
      console.error('Ezin izan da etxea kargatu:', errorea);
    }
  });

  // Leemos los interesados guardados.
  const gordetakoak = localStorage.getItem('interesdunak');

  if (gordetakoak) {
    this.interesdunGuztiak.set(JSON.parse(gordetakoak));
  }
}

  bidaliFormularioa(form: NgForm): void {
  const unekoEtxea = this.etxea();

  if (!unekoEtxea || form.invalid) return;

  const interesdunBerria: Interesduna = {
    etxeaId: String(unekoEtxea.id),
    izena: this.izena,
    abizena: this.abizena,
    emaila: this.emaila,
  };

  this.interesdunGuztiak.update(
    (zerrenda) => [...zerrenda, interesdunBerria]
  );

  localStorage.setItem(
    'interesdunak',
    JSON.stringify(this.interesdunGuztiak())
  );

  form.resetForm();
}
}
