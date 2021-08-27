import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuard} from './infraestructure/_helpers';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
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
        loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'proyecto',
        data: {
          breadcrumb: 'Proyectos'
        },
        loadChildren: () => import('./core/proyecto/proyecto.module').then(m => m.ProyectoModule)
      },
      {
        path: 'contrato',
        data: {
          breadcrumb: 'Contratos'
        },
        loadChildren: () => import('./core/contrato/contrato.module').then(m => m.ContratoModule)
      },
      {
        path: 'municipio',
        data: {
          breadcrumb: 'Municipios'
        },
        loadChildren: () => import('./core/municipio/municipio.module').then(m => m.MunicipioModule)
      },
      {
        path: 'administracion',
        data: {
          breadcrumb: 'Administración'
        },
        loadChildren: () => import('./core/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'templates',
        data: {
          breadcrumb: 'Templates'
        },
        loadChildren: () => import('./core/templates/templates.module').then(m => m.TemplatesModule)
      },
      {
        path: 'configuraciones',
        data: {
          breadcrumb: 'Configuraciones'
        },
        loadChildren: () => import('./core/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'notificaciones',
        data: {
          breadcrumb: 'Notificaciones'
        },
        loadChildren: () => import('./core/notifications/notifications.module').then(m => m.NotificationsModule)
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
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
