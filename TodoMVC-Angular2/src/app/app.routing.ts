import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TodosComponent} from './todos.component';

const rootRouterConfig: Routes = [
  // {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: TodosComponent},
  {path: 'active', component: TodosComponent},
  {path: 'completed', component: TodosComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);
