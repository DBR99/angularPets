import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        data: {
          breadcrumb: 'home'
        },
        loadChildren: () => import('./core/history/history.module').then(m => m.HistoryModule)
      },
      {
        path: 'citas',
        data: {
          breadcrumb: 'citas'
        },
        loadChildren: () => import('./core/appointments/appointments.module').then(m => m.AppointmentsModule)
      },
      {
        path: 'pet',
        data: {
          breadcrumb: 'pet'
        },
        loadChildren: () => import('./core/pet/pet.module').then(m => m.PetModule)
      }
    ]
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./core/pet/pet.module').then(m => m.PetModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
