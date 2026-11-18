import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etxeak } from '../../services/etxeak';

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
   etxea = this.etxeZerbitzua.bat(this.id);
}
