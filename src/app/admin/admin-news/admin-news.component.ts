import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { UploadEvent } from 'primeng/fileupload';
import { Berita } from 'src/app/model/berita.model';
import { ButtonModel } from 'src/app/model/button.model';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss'],
})
export class AdminNewsComponent {

    constructor(private builder: FormBuilder){}

    beritaForm: FormGroup
    beritaList: Berita[]
    dataMenuButtons: ButtonModel[]
    formTitle: string = ''
    isShowForm: boolean = false
    imgSource = "http://localhost:4200/assets/anak-sekolaah.jpg"
    iconUpload = ""

    ngOnInit() {

        this.dataMenuButtons = [
            {
                icon: faAdd,
                title: 'Tambah',
                onClick: () => { this.onAdd() }
            }
        ]

        this.beritaList = [
            {
                judulBerita: 'Ayam berperestasi membaca internasional',
                konten:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
                tanggalKirim: '2 Maret 2024',
                penulis: 'admin'
            },
            {
                judulBerita: 'Ayam kalah membaca internasional',
                konten:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
                tanggalKirim: '3 Maret 2024',
                penulis: 'admin'
            },
            {
                judulBerita: 'Ayam terbang membaca internasional',
                konten:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
                tanggalKirim: '5 Maret 2024',
                penulis: 'admin'
            }
        ]
    }

    onAdd() {
        this.beritaForm = this.builder.group({
            judulBerita: '',
            konten: '',
            tanggalKirim: '',
            penulis: ''

        })

        this.formTitle = 'Tambah Berita'
        this.isShowForm = true
    }

    onClickDetail(berita: Berita) {
        this.beritaForm = this.builder.group({
            judulBerita: berita.judulBerita,
            konten: berita.konten,
            tanggalKirim: berita.tanggalKirim,
            penulis: berita.penulis
        })

        this.formTitle = 'Detail Berita'
        this.isShowForm = true
    }

    onBasicUploadAuto(event: UploadEvent) {
        //TODO:
    }

    onCancel() {
        this.isShowForm = false
    }

    onSave() {
        // TODO: Save Before Close the Form
        this.onCancel()
    }
}
