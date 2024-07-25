import { Component, inject, OnInit, signal } from '@angular/core'
import { PaginatorState } from 'primeng/paginator'
import { GaleriService } from 'src/app/api/admin/galeri/galeri.service'
import { GaleriResponse } from 'src/app/api/admin/galeri/interface/galeri-response'
import { Constants } from 'src/app/api/config/constant'
import { Galeri } from 'src/app/model/galeri.model'

@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: [ './gallery.component.scss' ],
})
export class GalleryComponent implements OnInit {
    private galeriService = inject(GaleriService)

    imageBaseURL = ''
    galeriList: Galeri[] = []
    gambarURLs: string[] = []
    isDataExists = signal<boolean>(this.galeriList.length > 0)
    first: number = 0
    currentPage: number = 1
    limit: number = 1
    totalRecords = signal<number>(0)

    ngOnInit () {
        this.imageBaseURL = Constants.API_ENDPOINT
        this.setGaleriList(1, 1)
    }

    setGaleriList (
        currentPage: number = 1,
        limit: number = 10,
        keyword?: string
    ) {
        this.limit = limit
        this.currentPage = currentPage
        this.galeriList = []
        this.gambarURLs = []

        this.galeriService
            .getGaleriList(currentPage, limit, keyword)
            .then((res: GaleriResponse) => {
                this.totalRecords.set(res.totalRecords)
                this.isDataExists.set(this.galeriList.length > 0)

                this.galeriList = res.galeriList
                this.galeriList.at(0).gambarIDs.forEach(gambarID => {
                    this.gambarURLs.push(`${this.imageBaseURL}/${gambarID}`)
                })
            })
    }

    onPageChange (event: PaginatorState) {
        this.setGaleriList(event.page + 1, this.limit)
    }

    onSearch (keyword: string) {
        this.setGaleriList(this.currentPage, this.limit, keyword)
    }

    removeFileExtension (filename: string) {
        return filename.split('.').slice(0, -1).join('.')
    }

    responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5,
        },
        {
            breakpoint: '768px',
            numVisible: 3,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
        },
    ]
}
