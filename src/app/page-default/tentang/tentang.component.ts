import { Component, inject, input, OnInit } from '@angular/core'
import { FasilitasService } from 'src/app/api/admin/fasilitas/fasilitas.service'
import { Fasilitas } from 'src/app/api/admin/fasilitas/interface/fasilitas.interface'
import { DataResponse } from 'src/app/api/admin/shared/interface/data-response.interface'
import { Constants } from 'src/app/api/config/constant'
import { Sekolah } from 'src/app/model/sekolah.model'

@Component({
    selector: 'tentang',
    templateUrl: './tentang.component.html',
    styleUrls: [ './tentang.component.scss' ],
})
export class TentangComponent implements OnInit {
    sekolah = input.required<Sekolah>()
    fasilitasNames: string[] = []
    fasilitasImages: string[] = []

    private fasilitasService = inject(FasilitasService)
    private imageBaseURL = ''

    ngOnInit (): void {
        this.imageBaseURL = Constants.API_ENDPOINT
        this.getFasilitas().then((fasilitas: DataResponse<Fasilitas>) => {
            this.fasilitasNames = fasilitas.dataList.map(
                (fasilitas: Fasilitas) => fasilitas.namaFasilitas
            )
            this.fasilitasImages = fasilitas.dataList.map(
                (fasilitas: Fasilitas) =>
                    `${this.imageBaseURL}/${fasilitas.gambarIlustrasi}`
            )
        })
    }

    async getFasilitas (): Promise<DataResponse<Fasilitas>> {
        return this.fasilitasService.getFasilitasList(1, 5)
    }
}
