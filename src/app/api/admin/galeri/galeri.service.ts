import { Injectable } from '@angular/core'
import { BaseAPIService } from '../shared/base-api.service'
import { Feature } from 'src/app/model/enum/feature.enum'
import { GaleriResponse } from './interface/galeri-response'
import { APIResponse } from '../../public/types/api-response.type'
import { Galeri } from 'src/app/model/galeri.model'
import { StringID } from 'src/app/model/types/string.types'

@Injectable()
export class GaleriService extends BaseAPIService {
    async addGaleri (dataGaleri: Galeri): Promise<APIResponse<StringID>> {
        return await this.addOne(Feature.Galeri, dataGaleri)
    }

    async getCount (): Promise<number> {
        return await this.getCountOf(Feature.Galeri)
    }

    async getGaleriList (
        page: number,
        limit: number,
        keyword?: string
    ): Promise<GaleriResponse> {
        return await this.getListOf<GaleriResponse>(
            Feature.Galeri,
            page,
            limit,
            keyword
        )
    }

    async updateGaleri (
        idGaleri: string,
        dataGaleri: Partial<Galeri>
    ): Promise<APIResponse<StringID>> {
        return await this.update(idGaleri, Feature.Galeri, dataGaleri)
    }
}
