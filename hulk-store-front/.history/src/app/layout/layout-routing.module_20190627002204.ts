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
            { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
            { path: 'ventas', loadChildren: () => import('./productos/ventas.module').then(m => m.VentasModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
