import { Component, inject, OnInit, signal } from '@angular/core'
import { BeritaService } from 'src/app/api/admin/berita/berita.service'
import { FAQService } from 'src/app/api/admin/faq/faq.service'
import { FasilitasService } from 'src/app/api/admin/fasilitas/fasilitas.service'
import { GaleriService } from 'src/app/api/admin/galeri/galeri.service'

@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: [ './admin-home.component.scss' ],
})
export class AdminHomeComponent implements OnInit {
    beritaService = inject(BeritaService)
    faqService = inject(FAQService)
    fasilitasService = inject(FasilitasService)
    galeriService = inject(GaleriService)

    beritaCount = signal<number>(0)
    faqCount = signal<number>(0)
    fasilitasCount = signal<number>(0)
    galeriCount = signal<number>(0)

    ngOnInit (): void {
        this.beritaService.getCount().then(count => {
            this.beritaCount.set(count)
        })

        this.faqService.getCount().then(count => {
            this.faqCount.set(count)
        })

        this.fasilitasService.getCount().then(count => {
            this.fasilitasCount.set(count)
        })

        this.galeriService.getCount().then(count => {
            this.galeriCount.set(count)
        })
    }
}
