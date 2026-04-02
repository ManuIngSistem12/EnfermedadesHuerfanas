import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Inicio } from './inicio/inicio';
import { QueSon } from './que-son/que-son';
import { Tipos } from './tipos/tipos';
import { Tabla } from './tabla/tabla';
import { Conciencia } from './conciencia/conciencia';
import { Tecnologias } from './tecnologias/tecnologias';
import { Contactanos } from './contactanos/contactanos';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {path: '', redirectTo: 'inicio', pathMatch: 'full'},
            {path: 'inicio', component:  Inicio},
            {path: 'queson', component:  QueSon},
            {path: 'tipos', component:  Tipos},
            {path: 'tabla', component:  Tabla},
            {path: 'conciencia', component:  Conciencia},
            {path: 'tecnologias', component:  Tecnologias},
            {path: 'contactanos', component:  Contactanos},
        ]
    }
];
