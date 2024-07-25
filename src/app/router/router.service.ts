import { inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { RouterConstant } from './router.constant'

@Injectable({
    providedIn: 'root',
})
export class RouterService {
    private router = inject(Router)

    toAdmin = {
        berita: () => {
            this.router.navigateByUrl(RouterConstant.toAdmin.berita)
        },
        galeri: () => {
            this.router.navigateByUrl(RouterConstant.toAdmin.galeri)
        },
        ringkasanData: () => {
            this.router.navigateByUrl(RouterConstant.toAdmin.ringkasanData)
        },
    }

    toSekolah = {
        informasi: () => {
            this.router.navigateByUrl(RouterConstant.toSekolah.informasi)
        },
        akreditasi: () => {
            this.router.navigateByUrl(RouterConstant.toSekolah.akreditasi)
        },
        fasilitas: () => {
            this.router.navigateByUrl(RouterConstant.toSekolah.fasilitas)
        },
    }

    toAuth = {
        login: () => {
            this.router.navigateByUrl(RouterConstant.toLogin)
        },
    }

    toNewsDetail (beritaID: string) {
        this.router.navigateByUrl(`${RouterConstant.toNewsDetail}/${beritaID}`)
    }
}
