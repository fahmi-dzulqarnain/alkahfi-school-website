import { Injectable } from '@angular/core'
import { BaseAPIService } from '../shared/base-api.service'
import { Feature } from 'src/app/model/enum/feature.enum'
import { APIResponse } from '../../public/types/api-response.type'
import { StringID } from 'src/app/model/types/string.types'
import { DataResponse } from '../shared/interface/data-response.interface'
import { Akreditasi } from 'src/app/model/akreditasi.model'

@Injectable()
export class AkreditasiService extends BaseAPIService {
    async getAkreditasiList (
        page: number,
        limit: number,
        keyword?: string
    ): Promise<DataResponse<Akreditasi>> {
        return await this.getListOf<DataResponse<Akreditasi>>(
            Feature.Akreditasi,
            page,
            limit,
            keyword
        )
    }

    async addAkreditasi (
        dataAkreditasi: Akreditasi
    ): Promise<APIResponse<StringID>> {
        return await this.addOne(Feature.Akreditasi, dataAkreditasi)
    }

    async updateAkreditasi (
        idAkreditasi: string,
        dataAkreditasi: Partial<Akreditasi>
    ): Promise<APIResponse<StringID>> {
        return await this.update(
            idAkreditasi,
            Feature.Akreditasi,
            dataAkreditasi
        )
    }
}
