import { Component, inject, input, signal } from '@angular/core'
import { PaginatorState } from 'primeng/paginator'
import { Berita } from 'src/app/admin/admin-news/model/interface/berita.model'
import { BeritaService } from 'src/app/api/admin/berita/berita.service'
import { BeritaResponse } from 'src/app/api/admin/berita/interface/berita-response.interface'
import { Constants } from 'src/app/api/config/constant'
import { RouterService } from 'src/app/router/router.service'

@Component({
    selector: 'news',
    templateUrl: './news.component.html',
    styleUrls: [ './news.component.scss' ],
})
export class NewsComponent {
    private beritaService = inject(BeritaService)
    private routeTo = inject(RouterService)

    isSmallLayout = input<boolean>(false)
    hasBackground = input<boolean>(true)
    imageBaseURL = ''
    beritaList: Berita[] = []
    isDataExists = signal<boolean>(this.beritaList.length > 0)
    gambarIDs: string[] = []
    first: number = 0
    currentPage: number = 1
    limit: number = 1
    totalRecords = signal<number>(0)
    isSearchFieldShown = signal<boolean>(false)

    ngOnInit () {
        this.imageBaseURL = Constants.API_ENDPOINT
        this.limit = this.isSmallLayout() ? 5 : 3
        this.setBeritaList(1)
    }

    setBeritaList (currentPage: number = 1, keyword?: string) {
        this.beritaService
            .getBeritaList(currentPage, this.limit, keyword)
            .then((res: BeritaResponse) => {
                const beritaListWithKontenPreviewAndRemoveHTML =
                    res.beritaList.map((berita: Berita) => {
                        return {
                            ...berita,
                            kontenPreview: `${berita.kontenHTML
                                .replace(/<[^>]*>?/gm, '')
                                .replace(/&nbsp;/g, ' ')
                                .slice(0, 150)}...`,
                            createdAt: new Date(
                                berita.createdAt
                            ).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            }),
                        }
                    })

                this.totalRecords.set(res.totalRecords)
                this.beritaList = beritaListWithKontenPreviewAndRemoveHTML
                this.isDataExists.set(this.beritaList.length > 0)
            })
    }

    onPageChange (event: PaginatorState) {
        this.setBeritaList(event.page + 1)
    }

    showSearchField () {
        this.isSearchFieldShown.set(!this.isSearchFieldShown())
    }

    onSearch (keyword: any) {
        const finalKeyword = keyword.target.value
        if (typeof finalKeyword === 'string') {
            if (finalKeyword.length > 3) {
                this.setBeritaList(this.currentPage, finalKeyword)
            } else if (finalKeyword.length === 0) {
                this.setBeritaList(this.currentPage)
            }
        }
    }

    onClickDetail (berita: Berita) {
        console.log(berita.id)
        this.routeTo.toNewsDetail(berita.id)
    }
}
