import { Routes } from '@angular/router';
import { EtxeXehetasuna } from './etxe-xehetasuna/etxe-xehetasuna';
import { EtxeaZerrenda } from './etxea-zerrenda/etxea-zerrenda';

export const routes: Routes = [{
    path: '', component: EtxeaZerrenda, title: "Etxeen Zerrenda"
}, 
{
    path: '', component: EtxeXehetasuna, title: "Etxeen Xehetasuna"
}
];
