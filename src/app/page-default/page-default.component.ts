import { Component, inject } from '@angular/core'
import { StringID } from '../model/types/string.types'
import { SekolahService } from '../api/admin/sekolah/sekolah.service'
import { RouterService } from '../router/router.service'
import { Sekolah } from '../model/sekolah.model'

@Component({
    selector: 'app-page-default',
    templateUrl: './page-default.component.html',
    styleUrls: [ './page-default.component.scss' ],
})
export class PageDefaultComponent {
    private router = inject(RouterService)
    private sekolahService = inject(SekolahService)

    sekolah: Sekolah = {
        id: '',
        namaSekolah: '',
        alamat: '',
        noTelp: '',
        email: '',
        tautanWebsite: '',
        logo: '',
        npsn: '',
        kelurahan: '',
        kecamatan: '',
        kota: '',
        tahunDidirikan: '',
        slogan: '',
        hariBelajar: [],
        jamBelajar: '',
    }

    ngOnInit () {
        this.getSekolahInfo()
    }

    getSekolahInfo (): void {
        this.getSekolahUID().then((id: string) => {
            sessionStorage.setItem('idSekolah', id)

            this.sekolahService.getSekolahByID().then((sekolah: Sekolah) => {
                this.sekolah = sekolah
            })
        })
    }

    async getSekolahUID (): Promise<StringID> {
        const hostname = window.location.hostname
        return this.sekolahService.getSekolahByHostname(hostname)
    }
}
