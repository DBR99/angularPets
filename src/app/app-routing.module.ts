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
      /* {
         path: 'home',
         data: {
           breadcrumb: 'home'
         },
         loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule)
       },
       {
         path: 'proyecto',
         data: {
           breadcrumb: 'Proyectos'
         },
         loadChildren: () => import('./core/proyecto/proyecto.module').then(m => m.ProyectoModule)
       }*/
    ]
  },
  /*{
    path: 'login',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },*/
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
