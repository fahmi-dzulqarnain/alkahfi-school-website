import { Injectable } from '@angular/core'
import { BaseAPIService } from '../shared/base-api.service'
import { Feature } from 'src/app/model/enum/feature.enum'

@Injectable()
export class FasilitasService extends BaseAPIService {
    async getCount (): Promise<number> {
        return await this.getCountOf(Feature.Fasilitas)
    }

    async getFasilitasList (page: number, limit: number, keyword?: string) {
        return await this.getListOf(Feature.Fasilitas, page, limit, keyword)
    }
}
