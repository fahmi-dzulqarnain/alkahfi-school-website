import { HttpStatusCode } from '@angular/common/http'
import { Component, inject, signal } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete'
import { SekolahService } from 'src/app/api/admin/sekolah/sekolah.service'
import { DataResponse } from 'src/app/api/admin/shared/interface/data-response.interface'
import { ButtonModel } from 'src/app/model/button.model'
import { Feature } from 'src/app/model/enum/feature.enum'
import { TitleOf } from 'src/app/model/form-title.model'
import { Localities } from 'src/app/model/localities.model'
import { Option } from 'src/app/model/option.model'
import { Sekolah } from 'src/app/model/sekolah.model'
import { FormTitle } from 'src/app/model/types/string.types'
import { AddressService } from 'src/app/services/address.service'
import { DaysService } from 'src/app/services/days.service'

@Component({
    selector: 'app-admin-sekolah',
    templateUrl: './admin-sekolah.component.html',
    styleUrl: './admin-sekolah.component.scss',
})
export class AdminSekolahComponent {
    private builder = inject(FormBuilder)
    private addressService = inject(AddressService)
    private daysService = inject(DaysService)
    private service = inject(SekolahService)

    sekolahForm: FormGroup
    days: Option[]
    filteredKecamatan: string[]
    filteredKelurahan: string[]
    gambarIDs: string[] = []
    sekolahList: Sekolah[] = []
    dataMenuButtons: ButtonModel[] = []
    kategoriIDs: string[] = []

    private addresses: Localities[]
    private selectedKecamatan: string

    formTitle: FormTitle = ''
    isShowForm = signal<boolean>(false)
    isDataExists = signal<boolean>(this.sekolahList.length > 0)
    totalRecords = signal<number>(0)

    first: number = 0
    currentPage: number = 1
    limit: number = 1

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

        this.addresses = this.addressService.batamLocalities
        this.days = this.daysService.days

        this.setSekolahList()
    }

    filterKecamatan (event: AutoCompleteCompleteEvent) {
        const filtered: string[] = []
        const query = event.query

        for (let i = 0; i < this.addresses.length; i++) {
            const kecamatan = this.addresses[i].kecamatan
            if (kecamatan.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(kecamatan)
            }
        }

        this.filteredKecamatan = filtered
    }

    onKecamatanSelected () {
        this.selectedKecamatan = this.sekolahForm.value.kecamatan

        if (this.selectedKecamatan != '') {
            this.sekolahForm.get('kelurahan')?.setValue('')
            this.sekolahForm.get('kelurahan')?.enable()
        }
    }

    filterKelurahan (event: AutoCompleteCompleteEvent) {
        const filtered: string[] = []
        const query = event.query
        const selectedKecamatan = this.sekolahForm.value.kecamatan
        const daftarKelurahan = this.addresses.find(
            value => value.kecamatan == selectedKecamatan
        ).kelurahan

        for (const kelurahan in daftarKelurahan) {
            if (kelurahan.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(kelurahan)
            }
        }

        this.filteredKelurahan = filtered
    }

    setSekolahList (
        currentPage: number = 1,
        limit: number = 10,
        keyword?: string
    ) {
        this.limit = limit
        this.service
            .getSekolahList(currentPage, limit, keyword)
            .then((res: DataResponse<Sekolah>) => {
                this.totalRecords.set(res.totalRecords)
                this.sekolahList = res.dataList
                this.isDataExists.set(this.sekolahList.length > 0)
            })
    }

    onSearch (keyword: string) {
        this.setSekolahList(this.currentPage, this.limit, keyword)
    }

    generateKecamatanKelurahan () {
        this.selectedKecamatan = this.sekolahForm.value.kecamatan
        this.sekolahForm.get('hariBelajar').setValue([ 1 ])

        if (this.selectedKecamatan != '') {
            this.sekolahForm.get('kelurahan')?.enable()
        }
    }

    onAdd () {
        this.sekolahForm = this.builder.group({
            namaSekolah: '',
            npsn: '',
            alamat: '',
            kelurahan: '',
            kecamatan: '',
            kota: '',
            email: '',
            noTelp: '',
            tahunDidirikan: '',
            logo: '',
            slogan: '',
            hariBelajar: [],
            jamAwalBelajar: '',
            jamAkhirBelajar: '',
            tautanWebsite: '',
        })

        this.formTitle = TitleOf.tambah(Feature.Sekolah)
        this.isShowForm.set(true)
        this.generateKecamatanKelurahan()
    }

    onClickDetail (sekolah: Sekolah) {
        const jamBelajar = sekolah.jamBelajar.split('-')
        const jamAwalBelajar = jamBelajar[0]
        const jamAkhirBelajar = jamBelajar[1]

        this.kategoriIDs = sekolah.kategori.map(kategori => kategori.id)
        this.sekolahForm = this.builder.group({
            id: sekolah.id,
            namaSekolah: sekolah.namaSekolah,
            npsn: sekolah.npsn,
            alamat: sekolah.alamat,
            kelurahan: sekolah.kelurahan,
            kecamatan: sekolah.kecamatan,
            kota: sekolah.kota,
            email: sekolah.email,
            noTelp: sekolah.noTelp,
            tahunDidirikan: sekolah.tahunDidirikan,
            logo: sekolah.logo,
            slogan: sekolah.slogan,
            hariBelajar: sekolah.hariBelajar,
            jamAwalBelajar,
            jamAkhirBelajar,
            tautanWebsite: sekolah.tautanWebsite,
        })

        this.formTitle = TitleOf.detail(Feature.Sekolah)
        this.isShowForm.set(true)
        this.generateKecamatanKelurahan()
    }

    onCancel () {
        this.isShowForm.set(false)
    }

    onSave () {
        const sekolahData = this.sekolahForm.value
        const gambarID: string | null = this.gambarIDs[0] ?? null
        const jamBelajar = `${sekolahData.jamAwalBelajar}-${sekolahData.jamAkhirBelajar}`

        const newSekolah: Sekolah = {
            namaSekolah: sekolahData.namaSekolah,
            npsn: sekolahData.npsn,
            alamat: sekolahData.alamat,
            kelurahan: sekolahData.kelurahan,
            kecamatan: sekolahData.kecamatan,
            kota: sekolahData.kota,
            email: sekolahData.email,
            noTelp: sekolahData.noTelp,
            tahunDidirikan: sekolahData.tahunDidirikan,
            logo: gambarID,
            slogan: sekolahData.slogan,
            hariBelajar: sekolahData.hariBelajar,
            jamBelajar,
            tautanWebsite: sekolahData.tautanWebsite,
            kategoriIDs: this.kategoriIDs,
        }

        if (newSekolah) {
            if (this.formTitle == TitleOf.tambah(Feature.Sekolah)) {
                this.service.addSekolah(newSekolah).then(response => {
                    if (response.statusCode == HttpStatusCode.Created) {
                        this.setSekolahList()
                        this.onCancel()
                    }
                })
            } else if (this.formTitle == TitleOf.detail(Feature.Sekolah)) {
                this.service
                    .updateSekolah(sekolahData.id, newSekolah)
                    .then(response => {
                        if (response.statusCode == HttpStatusCode.Ok) {
                            this.setSekolahList()
                            this.onCancel()
                        }
                    })
            }
        }
    }
}
