import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesDetailComponent } from './pages/clientes/clientes-detail/clientes-detail.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DetalleVentasComponent } from './pages/clientes/detalle-ventas/detalle-ventas.component';
import { ComerciantesComponent } from './pages/comerciantes/comerciantes.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProductoresComponent } from './pages/productores/productores.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RoleGuard } from './auth/guards/role.guard';
import { UsuariosDetailComponent } from './pages/usuarios/usuarios-detail/usuarios-detail.component';
import { UsuariosFormComponent } from './pages/usuarios/usuarios-form/usuarios-form.component';
import { ConctactoComponent } from './pages/conctacto/conctacto.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { ProcesoVentaComponent } from './pages/proceso-venta/proceso-venta.component';
import { SolicitudListComponent } from './pages/solicitud/solicitud-list/solicitud-list.component';
import { ProcesoDeVentaDetailComponent } from './pages/proceso-venta/proceso-de-venta-detail/proceso-de-venta-detail.component';
import { ProductoresFormComponent } from './pages/productores/productores-form/productores-form.component';
import { ProductosFormComponent } from './pages/productores/productos-form/productos-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'clientes/detail', component: ClientesDetailComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'clientes/page/:page', component: ClientesComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'usuarios/form', component: UsuariosFormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'usuarios/page/:page', component: UsuariosComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'productores', component: ProductoresComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'productos', component: ProductosFormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_PRODUCTOR' } },
  { path: 'productores/page/:page', component: ProductoresComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'productores/form', component: ProductoresFormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'comerciantes', component: ComerciantesComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'proceso-venta', component: ProcesoVentaComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'detalle-proceso', component: ProcesoDeVentaDetailComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'solicitud', component: SolicitudComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_CLIENTE_EXTERNO' } },
  { path: 'solicitud-list', component: SolicitudListComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'registro', component: RegistroComponent },
  { path: 'ventas', component: DetalleVentasComponent },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
