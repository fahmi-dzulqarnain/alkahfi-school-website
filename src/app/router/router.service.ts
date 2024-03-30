import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root'
})
export class RouterService {

    constructor (private router: Router) { }

    toAdmin = {
        berita: () => {
            this.router.navigate(['admin', 'berita'])
        },
        galeri: () => {
            this.router.navigate(['admin', 'galeri'])
        },
        ringkasanData: () => {
            this.router.navigate(['admin', 'ringkasan'])
        }
    }

    toSekolah = {
        informasi: () => {
            this.router.navigate(['admin', 'sekolah', 'informasi'])
        },
        akreditasi: () => {
            this.router.navigate(['admin', 'sekolah', 'akreditasi'])
        },
        fasilitas: () => {
            this.router.navigate(['admin', 'sekolah', 'fasilitas'])
        }
    }
}
