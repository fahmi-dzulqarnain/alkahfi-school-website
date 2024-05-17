import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../admin/login/login.component'
import { PageDefaultComponent } from '../page-default/page-default.component'
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component'
import { AdminNewsComponent } from '../admin/admin-news/admin-news.component'
import { AdminGalleriesComponent } from '../admin/admin-galleries/admin-galleries.component'
import { AdminContainerComponent } from '../admin/admin-container/admin-container.component'
import { AdminSekolahInformasiComponent } from '../admin/admin-sekolah/admin-sekolah-informasi/admin-sekolah-informasi.component'
import { AdminSekolahAkreditasiComponent } from '../admin/admin-sekolah/admin-sekolah-akreditasi/admin-sekolah-akreditasi.component'
import { AdminSekolahFasilitasComponent } from '../admin/admin-sekolah/admin-sekolah-fasilitas/admin-sekolah-fasilitas.component'
import { authGuard } from '../api/auth/guard/auth.guard'

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'default', component: PageDefaultComponent },
    {
        path: 'admin',
        component: AdminContainerComponent,
        canActivateChild: [ authGuard ],
        children: [
            {
                path: 'berita',
                component: AdminNewsComponent,
            },
            {
                path: 'galeri',
                component: AdminGalleriesComponent,
            },
            {
                path: 'ringkasan',
                component: AdminHomeComponent,
            },
            {
                path: 'sekolah',
                children: [
                    {
                        path: 'informasi',
                        component: AdminSekolahInformasiComponent,
                    },
                    {
                        path: 'akreditasi',
                        component: AdminSekolahAkreditasiComponent,
                    },
                    {
                        path: 'fasilitas',
                        component: AdminSekolahFasilitasComponent,
                    },
                ],
            },
        ],
    },
    { path: '**', redirectTo: 'default' },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {}
