import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Berita } from 'src/app/model/berita.model';

@Component({
  selector: 'berita-item',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './berita-item.component.html',
  styleUrl: './berita-item.component.scss',
})
export class BeritaItemComponent {
    constructor(private builder: FormBuilder){}

    beritaForm: FormGroup
    beritaList: Berita[]
    formTitle: string = ''
    isShowForm: boolean = false
    @Input() berita: Berita;

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

    ngOnInit() {

        this.beritaList = [
            {
                judulBerita: 'Ayam berperestasi membaca internasional',
                konten:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
                tanggalKirim: '2 Maret 2024',
                penulis: 'admin'
            },
            {
                judulBerita: 'Ayam berperestasi membaca internasional',
                konten:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
                tanggalKirim: '3 Maret 2024',
                penulis: 'admin'
            },
            {
                judulBerita: 'Ayam berperestasi membaca internasional',
                konten:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
                tanggalKirim: '5 Maret 2024',
                penulis: 'admin'
            }
        ]
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

    onCancel() {
        this.isShowForm = false
    }

    onSave() {
        // TODO: Save Before Close the Form
        this.onCancel()
    }
}
