import { HttpStatusCode } from '@angular/common/http'
import { Component, inject, signal } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FasilitasService } from 'src/app/api/admin/fasilitas/fasilitas.service'
import { Fasilitas } from 'src/app/api/admin/fasilitas/interface/fasilitas.interface'
import { DataResponse } from 'src/app/api/admin/shared/interface/data-response.interface'
import { ButtonModel } from 'src/app/model/button.model'
import { Feature } from 'src/app/model/enum/feature.enum'
import { TitleOf } from 'src/app/model/form-title.model'
import { FormTitle } from 'src/app/model/types/string.types'

@Component({
    selector: 'app-admin-sekolah-fasilitas',
    templateUrl: './admin-sekolah-fasilitas.component.html',
    styleUrls: [ './admin-sekolah-fasilitas.component.scss' ],
})
export class AdminSekolahFasilitasComponent {
    private builder = inject(FormBuilder)
    private service = inject(FasilitasService)

    fasilitasForm: FormGroup
    fasilitasList: Fasilitas[] = []
    dataMenuButtons: ButtonModel[] = []
    gambarIDs: string[] = []
    formTitle: FormTitle = ''
    isShowForm = signal<boolean>(false)
    isDataExists = signal<boolean>(this.fasilitasList.length > 0)
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

        this.setFasilitasList()
    }

    setFasilitasList (
        currentPage: number = 1,
        limit: number = 10,
        keyword?: string
    ) {
        this.limit = limit
        this.service
            .getFasilitasList(currentPage, limit, keyword)
            .then((res: DataResponse<Fasilitas>) => {
                this.totalRecords.set(res.totalRecords)
                this.fasilitasList = res.dataList
                this.isDataExists.set(this.fasilitasList.length > 0)
            })
    }

    onSearch (keyword: string) {
        this.setFasilitasList(this.currentPage, this.limit, keyword)
    }

    onAdd () {
        this.fasilitasForm = this.builder.group({
            namaFasilitas: '',
            deskripsi: '',
            gambarIlustrasi: '',
        })

        this.formTitle = TitleOf.tambah(Feature.Fasilitas)
        this.isShowForm.set(true)
    }

    onClickDetail (fasilitas: Fasilitas) {
        this.fasilitasForm = this.builder.group({
            id: fasilitas.id,
            namaFasilitas: fasilitas.namaFasilitas,
            deskripsi: fasilitas.deskripsi,
            gambarIlustrasi: fasilitas.gambarIlustrasi,
        })

        this.formTitle = TitleOf.detail(Feature.Fasilitas)
        this.isShowForm.set(true)
    }

    onCancel () {
        this.isShowForm.set(false)
    }

    onSave () {
        const fasilitasData = this.fasilitasForm.value
        const gambarID: string | null = this.gambarIDs[0] ?? null
        const sekolahID = sessionStorage.getItem('idSekolah')

        const newFasilitas: Fasilitas = {
            namaFasilitas: fasilitasData.namaFasilitas,
            gambarIlustrasi: gambarID,
            deskripsi: fasilitasData.deskripsi,
            sekolahID,
        }

        if (newFasilitas) {
            if (this.formTitle == TitleOf.tambah(Feature.Fasilitas)) {
                this.service.addFasilitas(newFasilitas).then(response => {
                    if (response.statusCode == HttpStatusCode.Created) {
                        this.setFasilitasList()
                        this.onCancel()
                    }
                })
            } else if (this.formTitle == TitleOf.detail(Feature.Fasilitas)) {
                this.service
                    .updateFasilitas(fasilitasData.id, newFasilitas)
                    .then(response => {
                        if (response.statusCode == HttpStatusCode.Ok) {
                            this.setFasilitasList()
                            this.onCancel()
                        }
                    })
            }
        }
    }
}
