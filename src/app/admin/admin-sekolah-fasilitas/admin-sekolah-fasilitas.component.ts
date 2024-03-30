import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { Akreditasi } from 'src/app/model/akreditasi.model'
import { ButtonModel } from 'src/app/model/button.model'
import { PredikatAkreditasi } from 'src/app/model/enum/predikat-akreditasi.enum'

@Component({
  selector: 'app-admin-sekolah-fasilitas',
  templateUrl: './admin-sekolah-fasilitas.component.html',
  styleUrls: ['./admin-sekolah-fasilitas.component.scss']
})
export class AdminSekolahFasilitasComponent {

    constructor(private builder: FormBuilder) {}

    akreditasiForm: FormGroup
    akreditasiList: Akreditasi[]
    dataMenuButtons: ButtonModel[]
    formTitle: string = ''
    isShowForm: boolean = false
    predikatOptions: PredikatAkreditasi[] = [
        'A (Unggul)', 'B (Baik)', 'C (Cukup)',
        'Sembunyikan'
    ]

    ngOnInit() {
        this.akreditasiList = [
            {
                tahun: '2020',
                predikatNilai: 'A (Unggul)'
            },
            {
                tahun: '2021',
                predikatNilai: 'B (Baik)'
            }
        ]

        this.dataMenuButtons = [
            {
                icon: faAdd,
                title: 'Tambah',
                onClick: () => { this.onAdd() }
            }
        ]
    }

    onAdd() {
        this.akreditasiForm = this.builder.group({
            tahun: '',
            predikatNilai: ''
        })

        this.formTitle = 'Tambah Akreditasi'
        this.isShowForm = true
    }

    onClickDetail(akreditasi: Akreditasi) {
        this.akreditasiForm = this.builder.group({
            tahun: akreditasi.tahun,
            predikatNilai: akreditasi.predikatNilai
        })

        this.formTitle = 'Detail Akreditasi'
        this.isShowForm = true
    }

    onCancel() {
        this.isShowForm = false
    }

    onSave() {
        // TODO: Save Before Close the Form
        this.onCancel()
    }
}
