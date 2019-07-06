import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute  } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) },
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'ges-egresado', loadChildren: () => import('./ges-egresado/ges-egresado.module').then(m => m.GesEgresadoModule) },
            { path: 'ges-encuesta/:id', loadChildren: () => import('./ges-encuesta/ges-encuesta.module').then(m => m.GesEncuestaeModule) },
            { path: 'facultades', loadChildren: () => import('./facultades/facultades.module').then(m => m.FacultadesModule) },
            { path: 'programas', loadChildren: () => import('./programas/programas.module').then(m => m.ProgranasModule) },
            { path: 'ges-eventos', loadChildren: () => import('./ges-eventos/ges-eventos.module').then(m => m.GesEventosModule) },
            { path: 'rep-egre-programa', loadChildren: () => import('./rep-egre-programa/rep-egre-programa.module').then(m => m.ReporteEgreProgModule) },
            { path: 'categoria-eventos', loadChildren: () => import('./categoria-eventos/categoria-eventos.module').then(m => m.CategoriaEventosModule) },
            { path: 'tipo-eventos', loadChildren: () => import('./tipo-eventos/tipo-eventos.module').then(m => m.TipoEventoModule) },
            { path: 'tipos-reconocimientos', loadChildren: () => import('./tipos-reconocimientos/tipos-reconocimientos.module').then(m => m.TiposReconocimientosModule) },
            { path: 'ges-reconocimiento', loadChildren: () => import('./ges-reconocimiento/ges-reconocimiento.module').then(m => m.GesReconocimientoModule) },
            { path: 'tipos-aportes', loadChildren: () => import('./tipos-aportes/tipos-aportes.module').then(m => m.TiposAportesModule) },
            { path: 'ges-aportes', loadChildren: () => import('./ges-aportes/ges-aportes.module').then(m => m.GesAportesModule) },
            { path: 'tipos-participacion', loadChildren: () => import('./tipos-participacion/tipos-participacion.module').then(m => m.TiposParticipacionModule) },
            { path: 'ges-participacion', loadChildren: () => import('./ges-participacion/ges-participacion.module').then(m => m.GesParticipacionModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
