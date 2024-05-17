import { Component, inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete'
import { UploadEvent } from 'primeng/fileupload'
import { Constants } from 'src/app/api/config/constant'
import { Localities } from 'src/app/model/localities.model'
import { Option } from 'src/app/model/option.model'
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

    editForm: FormGroup
    filteredKecamatan: string[]
    filteredKelurahan: string[]
    days: Option[]
    imgSource = 'http://localhost:4200/assets/FI-TK@2x.png'
    iconUpload = ''

    private addresses: Localities[]
    private selectedKecamatan: string

    ngOnInit () {
        this.editForm = this.builder.group({
            namaSekolah: 'TKIT Fajar Ilahi',
            slogan: 'Menuju Kejayaan Ummat dengan Al Quran dan As Sunnah',
            alamat: 'JL. Mayjend RH Sugandhi II No. 1 MKGR Batu Aji Batam',
            kelurahan: 'Kibing',
            kecamatan: 'Batu Aji',
            hariBelajar: [],
            jamAwalBelajar: '07:00',
            jamAkhirBelajar: '',
            kontak: '',
            email: '',
        })

        this.iconUpload = Constants.ICON_PREFIX + faUpload.iconName
        this.addresses = this.addressService.batamLocalities
        this.days = this.daysService.days
        this.selectedKecamatan = this.editForm.value.kecamatan
        this.editForm.get('hariBelajar').setValue([ 1 ])

        if (this.selectedKecamatan != '') {
            this.editForm.get('kelurahan')?.enable()
        }
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
        this.selectedKecamatan = this.editForm.value.kecamatan

        if (this.selectedKecamatan != '') {
            this.editForm.get('kelurahan')?.setValue('')
            this.editForm.get('kelurahan')?.enable()
        }
    }

    filterKelurahan (event: AutoCompleteCompleteEvent) {
        const filtered: string[] = []
        const query = event.query
        const selectedKecamatan = this.editForm.value.kecamatan
        const daftarKelurahan = this.addresses.find(
            value => value.kecamatan == selectedKecamatan
        ).kelurahan

        for (let i = 0; i < daftarKelurahan.length; i++) {
            const kelurahan = daftarKelurahan[i]
            if (kelurahan.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(kelurahan)
            }
        }

        this.filteredKelurahan = filtered
    }

    onBasicUploadAuto (event: UploadEvent) {
        //TODO:
    }

    onSubmit () {
        console.log(this.editForm.value)
    }
}
