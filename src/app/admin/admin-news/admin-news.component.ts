import { Component, inject, signal } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { Berita } from 'src/app/admin/admin-news/model/interface/berita.model'
import { ButtonModel } from 'src/app/model/button.model'
import { BeritaService } from 'src/app/api/admin/berita/berita.service'
import { BeritaResponse } from 'src/app/api/admin/berita/interface/berita-response.interface'
import { FormTitle } from 'src/app/model/types/string.types'
import { Feature } from 'src/app/model/enum/feature.enum'
import { TitleOf } from 'src/app/model/form-title.model'
import { StatusBeritaAllCase } from './model/enum/status-berita.enum'
import { Option } from 'src/app/model/option.model'
import { capitalize } from 'src/app/utilities/string.utilities'
import { HttpStatusCode } from '@angular/common/http'
import { PaginatorState } from 'primeng/paginator'

@Component({
    selector: 'app-admin-news',
    templateUrl: './admin-news.component.html',
    styleUrls: [ './admin-news.component.scss' ],
})
export class AdminNewsComponent {
    private builder = inject(FormBuilder)
    private beritaService = inject(BeritaService)

    beritaForm: FormGroup
    beritaList: Berita[] = []
    dataMenuButtons: ButtonModel[] = []
    isShowForm: boolean = false
    formTitle: FormTitle = ''
    isDataExists = signal<boolean>(this.beritaList.length > 0)
    iconUpload = ''
    statusOptions: Option[] = []
    gambarIDs: string[] = []
    first: number = 0
    currentPage: number = 1
    limit: number = 1
    totalRecords = signal<number>(0)

    ngOnInit () {
        this.dataMenuButtons = [
            {
                icon: faAdd,
                title: 'Tambah',
                onClick: () => {
                    this.onAdd()
                },
            },
        ]

        this.setBeritaList()
        this.setStatusOptions()
    }

    setBeritaList (
        currentPage: number = 1,
        limit: number = 10,
        keyword?: string
    ) {
        this.limit = limit
        this.beritaService
            .getBeritaList(currentPage, limit, keyword)
            .then((res: BeritaResponse) => {
                const beritaListWithKontenPreviewAndRemoveHTML =
                    res.beritaList.map((berita: Berita) => {
                        return {
                            ...berita,
                            kontenPreview: `${berita.kontenHTML
                                .replace(/<[^>]*>?/gm, '')
                                .slice(0, 96)}...`,
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
        this.setBeritaList(event.page + 1, this.limit)
    }

    onSearch (keyword: string) {
        console.log(keyword)
        this.setBeritaList(this.currentPage, this.limit, keyword)
    }

    setStatusOptions () {
        StatusBeritaAllCase.forEach((status: string) => {
            this.statusOptions.push({
                name: capitalize(status),
                value: status,
            })
        })
    }

    onAdd () {
        this.beritaForm = this.builder.group({
            judul: '',
            kontenHTML: '',
            status: '',
            gambarIlustrasi: '',
        })

        this.formTitle = TitleOf.tambah(Feature.Berita)
        this.isShowForm = true
    }

    onClickDetail (berita: Berita) {
        this.beritaForm = this.builder.group({
            id: berita.id,
            judul: berita.judul,
            kontenHTML: berita.kontenHTML,
            gambarIlustrasi: berita.gambarIlustrasi,
            status: berita.status,
            penyusunID: berita.penyusunID,
        })
        this.gambarIDs = []
        const gambarID = berita.gambarIlustrasi?.split('.')[0]

        if (gambarID) {
            this.gambarIDs.push(gambarID)
        }

        this.formTitle = TitleOf.detail(Feature.Berita)
        this.isShowForm = true
    }

    onCancel () {
        this.isShowForm = false
    }

    onSave () {
        const beritaData = this.beritaForm.value
        const gambarID = this.gambarIDs[0]
        const sekolahID = sessionStorage.getItem('idSekolah')
        const penyusunID = beritaData.penyusunID
            ? beritaData.penyusunID
            : sessionStorage.getItem('idUser')

        if (!gambarID) {
            console.error('Gambar Ilustrasi is Required')
            return
        }

        const newBerita: Berita = {
            judul: beritaData.judul,
            gambarIlustrasi: this.gambarIDs[0],
            kontenHTML: beritaData.kontenHTML,
            status: beritaData.status,
            penyusunID,
            sekolahID,
        }

        if (newBerita) {
            if (this.formTitle == TitleOf.tambah(Feature.Berita)) {
                this.beritaService.addBerita(newBerita).then(response => {
                    if (response.statusCode == HttpStatusCode.Created) {
                        this.setBeritaList()
                        this.onCancel()
                    }
                })
            } else if (this.formTitle == TitleOf.detail(Feature.Berita)) {
                this.beritaService
                    .updateBerita(beritaData.id, newBerita)
                    .then(response => {
                        if (response.statusCode == HttpStatusCode.Ok) {
                            this.setBeritaList()
                            this.onCancel()
                        }
                    })
            }
        }
    }
}
