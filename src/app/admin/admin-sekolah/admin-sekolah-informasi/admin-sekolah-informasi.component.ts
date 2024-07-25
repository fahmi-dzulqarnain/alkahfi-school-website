import { HttpStatusCode } from '@angular/common/http'
import { Component, inject, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { faAdd, faUpload } from '@fortawesome/free-solid-svg-icons'
import { MessageService } from 'primeng/api'
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete'
import { SekolahService } from 'src/app/api/admin/sekolah/sekolah.service'
import { DataResponse } from 'src/app/api/admin/shared/interface/data-response.interface'
import { Constants } from 'src/app/api/config/constant'
import { ButtonModel } from 'src/app/model/button.model'
import { Feature } from 'src/app/model/enum/feature.enum'
import { TitleOf } from 'src/app/model/form-title.model'
import { Kategori } from 'src/app/model/kategori.model'
import { Localities } from 'src/app/model/localities.model'
import { Option } from 'src/app/model/option.model'
import { Sekolah } from 'src/app/model/sekolah.model'
import { FormTitle } from 'src/app/model/types/string.types'
import { AddressService } from 'src/app/services/address.service'
import { DaysService } from 'src/app/services/days.service'

@Component({
    selector: 'app-admin-sekolah-informasi',
    templateUrl: './admin-sekolah-informasi.component.html',
    styleUrls: [ './admin-sekolah-informasi.component.scss' ],
})
export class AdminSekolahInformasiComponent implements OnInit {
    private builder = inject(FormBuilder)
    private addressService = inject(AddressService)
    private daysService = inject(DaysService)
    private service = inject(SekolahService)
    private messageService = inject(MessageService)
    private logoURL: string = ''

    sekolahForm: FormGroup = this.builder.group({
        namaSekolah: '',
        npsn: '',
        alamat: '',
        kelurahan: '',
        kecamatan: '',
        kota: '',
        email: '',
        noTelp: '',
        tahunDidirikan: '',
        slogan: '',
        hariBelajar: new FormControl([]),
        jamAwalBelajar: '',
        jamAkhirBelajar: '',
        tautanWebsite: '',
    })

    days: string[]
    filteredKecamatan: string[]
    filteredKelurahan: string[]
    kategoriIDs = []
    selectedDays: string[]

    private addresses: Localities[]
    private selectedKecamatan: string

    ngOnInit () {
        this.addresses = this.addressService.batamLocalities
        this.days = this.daysService.days.map(
            day => day.name
        ) as unknown as string[]

        this.getSekolahInfo()
    }

    getSekolahInfo () {
        this.service.getSekolahByID().then((sekolah: Sekolah) => {
            const jamBelajar = sekolah.jamBelajar?.split('-')
            const jamAwalBelajar = jamBelajar[0] ?? '00:00'
            const jamAkhirBelajar = jamBelajar[1] ?? '00:00'

            const hariBelajarString = sekolah.hariBelajar as unknown as string
            const hariBelajarArray = hariBelajarString
                .replace('{', '')
                .replace('}', '')
                .replaceAll('"', '')
                .split(',')

            this.kategoriIDs = sekolah.kategori.map(kategori => kategori.id)
            this.sekolahForm = this.builder.group({
                id: sekolah.id,
                namaSekolah: sekolah.namaSekolah,
                npsn: sekolah.npsn,
                alamat: sekolah.alamat,
                kelurahan: sekolah.kelurahan,
                kecamatan: sekolah.kecamatan,
                kota: sekolah.kota ?? '',
                email: sekolah.email,
                noTelp: sekolah.noTelp,
                tahunDidirikan: sekolah.tahunDidirikan,
                logo: sekolah.logo,
                slogan: sekolah.slogan,
                hariBelajar: new FormControl(hariBelajarArray),
                jamAwalBelajar,
                jamAkhirBelajar,
                tautanWebsite: sekolah.tautanWebsite,
            })
            this.selectedDays = hariBelajarArray
            this.logoURL = sekolah.logo

            this.generateKecamatanKelurahan()
        })
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
        const query = event.query
        const selectedKecamatan = this.sekolahForm.value.kecamatan
        const daftarKelurahan = this.addresses.find(
            value => value.kecamatan == selectedKecamatan
        ).kelurahan
        const filtered = daftarKelurahan.filter(kelurahan =>
            kelurahan.toLowerCase().startsWith(query.toLowerCase())
        )

        this.filteredKelurahan = filtered
    }

    generateKecamatanKelurahan () {
        this.selectedKecamatan = this.sekolahForm.value.kecamatan

        if (this.selectedKecamatan != '') {
            this.sekolahForm.get('kelurahan')?.enable()
        }
    }

    getJamBelajar (): string {
        const sekolahData = this.sekolahForm.value
        let jamAwalBelajar = sekolahData.jamAwalBelajar
        let jamAkhirBelajar = sekolahData.jamAkhirBelajar

        if (typeof jamAwalBelajar === 'object') {
            jamAwalBelajar = new Date(jamAwalBelajar).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            })
        }

        if (typeof jamAkhirBelajar === 'object') {
            jamAkhirBelajar = new Date(jamAkhirBelajar).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            })
        }

        return `${jamAwalBelajar}-${jamAkhirBelajar}`
    }

    onSave () {
        const idSekolah = sessionStorage.getItem('idSekolah')
        const sekolahData = this.sekolahForm.value

        const jamBelajar = this.getJamBelajar()

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
            logo: this.logoURL,
            slogan: sekolahData.slogan,
            hariBelajar: sekolahData.hariBelajar,
            jamBelajar,
            tautanWebsite: sekolahData.tautanWebsite,
            kategoriIDs: this.kategoriIDs,
        }

        if (newSekolah) {
            this.service
                .updateSekolah(idSekolah, newSekolah)
                .then(response => {
                    if (response.statusCode == HttpStatusCode.Ok) {
                        this.getSekolahInfo()
                        this.messageService.add({
                            severity: Constants.MESSAGE_SEVERITY.SUCCESS,
                            summary: 'Berhasil Mengubah Data',
                            detail: response.message,
                        })
                    } else {
                        this.messageService.add({
                            severity: Constants.MESSAGE_SEVERITY.ERROR,
                            summary: 'Gagal Mengubah Sekolah',
                            detail: response.message,
                        })
                    }
                })
                .catch(error => {
                    this.messageService.add({
                        severity: Constants.MESSAGE_SEVERITY.ERROR,
                        summary: 'Gagal Mengubah Sekolah',
                        detail: error.message,
                    })
                })
        }
    }
}
