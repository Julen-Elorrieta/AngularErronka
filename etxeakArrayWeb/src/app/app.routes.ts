import { Routes } from '@angular/router';
import { EtxeXehetasuna } from './pages/etxe-xehetasuna/etxe-xehetasuna';
import { EtxeaZerrenda } from './pages/etxea-zerrenda/etxea-zerrenda';

export const routes: Routes = [
  {
    path: '',
    component: EtxeaZerrenda,
    title: 'Etxeen Zerrenda',
  },
  {
    path: 'xehetasuna/:id',
    component: EtxeXehetasuna,
    title: 'Etxeen Xehetasuna',
  },
];
