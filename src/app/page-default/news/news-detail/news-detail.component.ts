import { Component, inject } from '@angular/core'
import { StatusBerita } from 'src/app/admin/admin-news/model/enum/status-berita.enum'
import { Berita } from 'src/app/admin/admin-news/model/interface/berita.model'
import { BeritaService } from 'src/app/api/admin/berita/berita.service'
import { Constants } from 'src/app/api/config/constant'
import { Feature } from 'src/app/model/enum/feature.enum'

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: [ './news-detail.component.scss' ],
})
export class NewsDetailComponent {
    imageBaseURL = ''
    beritaService = inject(BeritaService)
    beritaID = ''
    berita: Berita = {
        id: '',
        judul: '',
        gambarIlustrasi: '',
        kontenHTML: '',
        kontenPreview: '',
        status: StatusBerita.publik,
    }

    constructor () {
        this.imageBaseURL = Constants.API_ENDPOINT
        this.beritaID = window.location.pathname.split('/').pop()
        this.beritaService
            .getOneByID<Berita>(Feature.Berita, this.beritaID)
            .then(response => {
                this.berita = response
            })
    }
}
