import { HttpStatusCode } from '@angular/common/http'
import { Component, inject, signal } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { UploadEvent } from 'primeng/fileupload'
import { PaginatorState } from 'primeng/paginator'
import { GaleriService } from 'src/app/api/admin/galeri/galeri.service'
import { GaleriResponse } from 'src/app/api/admin/galeri/interface/galeri-response'
import { ButtonModel } from 'src/app/model/button.model'
import { Feature } from 'src/app/model/enum/feature.enum'
import { TitleOf } from 'src/app/model/form-title.model'
import { Galeri } from 'src/app/model/galeri.model'
import { FormTitle } from 'src/app/model/types/string.types'
import { GalleriService } from 'src/app/services/galleri.service'

@Component({
    selector: 'app-admin-galleries',
    templateUrl: './admin-galleries.component.html',
    styleUrls: [ './admin-galleries.component.scss' ],
})
export class AdminGalleriesComponent {
    private builder = inject(FormBuilder)
    private galeriService = inject(GaleriService)

    galeriList: Galeri[] = []
    galeriForm: FormGroup
    dataMenuButtons: ButtonModel[]
    gambarIDs: string[] = []
    gambarURLs: string[] = []
    formTitle: FormTitle = ''
    isShowForm: boolean = false
    isDataExists = signal<boolean>(this.galeriList.length > 0)
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

        this.setGaleriList()
    }

    setGaleriList (
        currentPage: number = 1,
        limit: number = 10,
        keyword?: string
    ) {
        this.limit = limit
        this.galeriService
            .getGaleriList(currentPage, limit, keyword)
            .then((res: GaleriResponse) => {
                console.log(res)
                this.totalRecords.set(res.totalRecords)
                this.galeriList = res.galeriList
                this.isDataExists.set(this.galeriList.length > 0)
            })
    }

    onPageChange (event: PaginatorState) {
        this.setGaleriList(event.page + 1, this.limit)
    }

    onSearch (keyword: string) {
        console.log(keyword)
        this.setGaleriList(this.currentPage, this.limit, keyword)
    }

    onAdd () {
        this.gambarURLs = []
        this.galeriForm = this.builder.group({
            judul: '',
            deskripsi: '',
        })

        this.formTitle = TitleOf.tambah(Feature.Galeri)
        this.isShowForm = true
    }

    onClickDetail (foto: Galeri) {
        this.gambarURLs = foto.gambarIDs
        this.galeriForm = this.builder.group({
            id: foto.id,
            judul: foto.judul,
            deskripsi: foto.deskripsi,
        })

        this.formTitle = TitleOf.detail(Feature.Galeri)
        this.isShowForm = true
    }

    onCancel () {
        this.isShowForm = false
    }

    onSave () {
        for (let i = 0; i < this.gambarURLs.length; i++) {
            const gambarID = this.removeFileExtension(this.gambarURLs[i])
            this.gambarIDs.push(gambarID)
        }

        const galeriData = this.galeriForm.value
        const judul = galeriData.judul
        const deskripsi = galeriData.deskripsi
        const gambarIDs = this.gambarIDs
        const sekolahID = sessionStorage.getItem('idSekolah')

        if (!judul || !deskripsi) {
            console.error('Judul dan deskripsi harus diisi')
            return
        }

        if (gambarIDs.length == 0) {
            console.error('Belum ada gambar yang diunggah')
            return
        }

        const newGaleri: Galeri = {
            judul,
            deskripsi,
            gambarIDs,
            sekolahID,
        }

        if (newGaleri) {
            if (this.formTitle == TitleOf.tambah(Feature.Galeri)) {
                this.galeriService.addGaleri(newGaleri).then(response => {
                    if (response.statusCode == HttpStatusCode.Created) {
                        this.setGaleriList()
                        this.onCancel()
                    }
                })
            } else if (this.formTitle == TitleOf.detail(Feature.Galeri)) {
                this.galeriService
                    .updateGaleri(galeriData.id, newGaleri)
                    .then(response => {
                        if (response.statusCode == HttpStatusCode.Ok) {
                            this.setGaleriList()
                            this.onCancel()
                        }
                    })
            }
        }
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
