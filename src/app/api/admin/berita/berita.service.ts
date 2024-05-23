import { Injectable } from '@angular/core'
import { BaseAPIService } from '../shared/base-api.service'
import { Feature } from 'src/app/model/enum/feature.enum'
import { BeritaResponse } from './interface/berita-response.interface'
import { APIResponse } from '../../public/types/api-response.type'
import { StringID } from 'src/app/model/types/string.types'
import { Berita } from 'src/app/admin/admin-news/model/interface/berita.model'

@Injectable()
export class BeritaService extends BaseAPIService {
    async getCount (): Promise<number> {
        return await this.getCountOf(Feature.Berita)
    }

    async getBeritaList (
        page: number,
        limit: number,
        keyword?: string
    ): Promise<BeritaResponse> {
        return await this.getListOf<BeritaResponse>(
            Feature.Berita,
            page,
            limit,
            keyword
        )
    }

    async addBerita (dataBerita: Berita): Promise<APIResponse<StringID>> {
        return await this.addOne(Feature.Berita, dataBerita)
    }

    async updateBerita (
        idBerita: string,
        dataBerita: Partial<Berita>
    ): Promise<APIResponse<StringID>> {
        return await this.update(idBerita, Feature.Berita, dataBerita)
    }
}
