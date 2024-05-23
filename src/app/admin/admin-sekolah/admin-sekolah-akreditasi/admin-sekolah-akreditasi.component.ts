import { HttpStatusCode } from '@angular/common/http'
import { Component, inject, OnInit, signal } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { AkreditasiService } from 'src/app/api/admin/akreditasi/akreditasi.service'
import { DataResponse } from 'src/app/api/admin/shared/interface/data-response.interface'
import { Akreditasi } from 'src/app/model/akreditasi.model'
import { ButtonModel } from 'src/app/model/button.model'
import { Feature } from 'src/app/model/enum/feature.enum'
import { PredikatAkreditasi } from 'src/app/model/enum/predikat-akreditasi.enum'
import { TitleOf } from 'src/app/model/form-title.model'
import { FormTitle } from 'src/app/model/types/string.types'

@Component({
    selector: 'app-admin-sekolah-akreditasi',
    templateUrl: './admin-sekolah-akreditasi.component.html',
    styleUrls: [ './admin-sekolah-akreditasi.component.scss' ],
})
export class AdminSekolahAkreditasiComponent implements OnInit {
    private builder = inject(FormBuilder)
    private service = inject(AkreditasiService)

    akreditasiForm: FormGroup
    akreditasiList: Akreditasi[] = []
    dataMenuButtons: ButtonModel[] = []

    formTitle: FormTitle = ''
    isShowForm = signal<boolean>(false)
    isDataExists = signal<boolean>(this.akreditasiList.length > 0)
    first: number = 0
    currentPage: number = 1
    limit: number = 1
    totalRecords = signal<number>(0)
    predikatOptions: PredikatAkreditasi[] = [
        'A (Unggul)',
        'B (Baik)',
        'C (Cukup)',
        'Sembunyikan',
    ]

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

        this.setAkreditasiList()
    }

    setAkreditasiList (
        currentPage: number = 1,
        limit: number = 10,
        keyword?: string
    ) {
        this.limit = limit
        this.service
            .getAkreditasiList(currentPage, limit, keyword)
            .then((res: DataResponse<Akreditasi>) => {
                this.totalRecords.set(res.totalRecords)
                this.akreditasiList = res.dataList
                this.isDataExists.set(this.akreditasiList.length > 0)
            })
    }

    onSearch (keyword: string) {
        this.setAkreditasiList(this.currentPage, this.limit, keyword)
    }

    onAdd () {
        this.akreditasiForm = this.builder.group({
            tahun: '',
            nilai: '',
        })

        this.formTitle = TitleOf.tambah(Feature.Akreditasi)
        this.isShowForm.set(true)
    }

    onClickDetail (akreditasi: Akreditasi) {
        this.akreditasiForm = this.builder.group({
            id: akreditasi.id,
            tahun: akreditasi.tahun,
            nilai: akreditasi.nilai,
        })

        this.formTitle = TitleOf.detail(Feature.Akreditasi)
        this.isShowForm.set(true)
    }

    onCancel () {
        this.isShowForm.set(false)
    }

    onSave () {
        const akreditasiData = this.akreditasiForm.value
        const sekolahID = sessionStorage.getItem('idSekolah')

        akreditasiData.tahun = new Date(akreditasiData.tahun)
            .getFullYear()
            .toString()

        const newAkreditasi: Akreditasi = {
            tahun: akreditasiData.tahun,
            nilai: akreditasiData.nilai,
            sekolahID,
        }

        if (newAkreditasi) {
            if (this.formTitle == TitleOf.tambah(Feature.Akreditasi)) {
                this.service.addAkreditasi(newAkreditasi).then(response => {
                    if (response.statusCode == HttpStatusCode.Created) {
                        this.setAkreditasiList()
                        this.onCancel()
                    }
                })
            } else if (this.formTitle == TitleOf.detail(Feature.Akreditasi)) {
                this.service
                    .updateAkreditasi(akreditasiData.id, newAkreditasi)
                    .then(response => {
                        if (response.statusCode == HttpStatusCode.Ok) {
                            this.setAkreditasiList()
                            this.onCancel()
                        }
                    })
            }
        }
    }
}
