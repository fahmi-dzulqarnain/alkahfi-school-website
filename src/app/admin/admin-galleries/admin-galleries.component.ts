import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { UploadEvent } from 'primeng/fileupload';
import { ButtonModel } from 'src/app/model/button.model';
import { galleri } from 'src/app/model/galleri.model';
import { GalleriService } from 'src/app/services/galleri.service';

@Component({
  selector: 'app-admin-galleries',
  templateUrl: './admin-galleries.component.html',
  styleUrls: ['./admin-galleries.component.scss']
})
export class AdminGalleriesComponent {

    galleriList!: galleri[];
    constructor(
        private builder: FormBuilder,
        // private foto: GalleriService
        ){}

    galleriForm: FormGroup
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


        this.galleriList = [
            {
                judulFoto: 'Ayam berperestasi membaca internasional',
                kontenFoto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
                tanggalKirim: '2 Maret 2024',
                penulis: 'admin'
            },
            // {
            //     judulFoto: 'Ayam kalah membaca internasional',
            //     kontenFoto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
            //     tanggalKirim: '3 Maret 2024',
            //     penulis: 'admin'
            // },
            // {
            //     judulFoto: 'Ayam terbang membaca internasional',
            //     kontenFoto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
            //     tanggalKirim: '5 Maret 2024',
            //     penulis: 'admin'
            // }
        ]

    }

    onAdd() {
        this.galleriForm = this.builder.group({
            judulFoto: '',
            kontenFoto: '',
            tanggalKirim: '',
            penulis: ''
        })

        this.formTitle = 'Tambah Foto'
        this.isShowForm = true
    }

    onClickDetail(foto: galleri) {
        this.galleriForm = this.builder.group({
            judulFoto: foto.judulFoto,
            kontenFoto: foto.kontenFoto,
            tanggalKirim: foto.tanggalKirim,
            penulis: foto.penulis
        })

        this.formTitle = 'Tambah Foto'
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

    getProductsMini() {
        return Promise.resolve(this.galleriList.slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.galleriList.slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.galleriList);
    }
}
