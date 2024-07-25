import { Injectable } from '@angular/core'
import { BaseAPIService } from '../shared/base-api.service'
import { Feature } from 'src/app/model/enum/feature.enum'
import { Fasilitas } from './interface/fasilitas.interface'
import { APIResponse } from '../../public/types/api-response.type'
import { StringID } from 'src/app/model/types/string.types'
import { DataResponse } from '../shared/interface/data-response.interface'

@Injectable()
export class FasilitasService extends BaseAPIService {
    async getCount (): Promise<number> {
        return await this.getCountOf(Feature.Fasilitas)
    }

    async getFasilitasList (
        page: number,
        limit: number,
        keyword?: string
    ): Promise<DataResponse<Fasilitas>> {
        return await this.getListOf(Feature.Fasilitas, page, limit, keyword)
    }

    async addFasilitas (
        dataFasilitas: Fasilitas
    ): Promise<APIResponse<StringID>> {
        return await this.addOne(Feature.Fasilitas, dataFasilitas)
    }

    async updateFasilitas (
        idFasilitas: string,
        dataFasilitas: Partial<Fasilitas>
    ): Promise<APIResponse<StringID>> {
        return await this.update(idFasilitas, Feature.Fasilitas, dataFasilitas)
    }
}
