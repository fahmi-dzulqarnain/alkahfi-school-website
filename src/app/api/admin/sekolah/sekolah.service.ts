import { Injectable } from '@angular/core'
import { BaseAPIService } from '../shared/base-api.service'
import { Feature } from 'src/app/model/enum/feature.enum'
import { APIResponse } from '../../public/types/api-response.type'
import { Galeri } from 'src/app/model/galeri.model'
import { StringID } from 'src/app/model/types/string.types'
import { Sekolah } from 'src/app/model/sekolah.model'
import { DataResponse } from '../shared/interface/data-response.interface'

@Injectable()
export class SekolahService extends BaseAPIService {
    async addSekolah (dataSekolah: Sekolah): Promise<APIResponse<StringID>> {
        return await this.addOne(Feature.Sekolah, dataSekolah)
    }

    async getSekolahByID (): Promise<Sekolah> {
        const idSekolah = sessionStorage.getItem('idSekolah')
        return await this.getOneByID(Feature.Sekolah, idSekolah)
    }

    async getSekolahList (
        page: number,
        limit: number,
        keyword?: string
    ): Promise<DataResponse<Sekolah>> {
        return await this.getListOf<DataResponse<Sekolah>>(
            Feature.Sekolah,
            page,
            limit,
            keyword
        )
    }

    async updateSekolah (
        idSekolah: string,
        dataSekolah: Partial<Sekolah>
    ): Promise<APIResponse<StringID>> {
        return await this.update(idSekolah, Feature.Sekolah, dataSekolah)
    }
}
