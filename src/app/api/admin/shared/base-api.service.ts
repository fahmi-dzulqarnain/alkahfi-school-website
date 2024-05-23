import { HttpClient } from '@angular/common/http'
import { inject } from '@angular/core'
import { lastValueFrom, catchError } from 'rxjs'
import { Constants } from '../../config/constant'
import { APIResponse } from '../../public/types/api-response.type'
import { Feature } from 'src/app/model/enum/feature.enum'
import { StringID } from 'src/app/model/types/string.types'

export class BaseAPIService {
    httpClient = inject(HttpClient)

    async getCountOf (featureEndpoint: Feature): Promise<number> {
        const response = await lastValueFrom(
            this.httpClient
                .get<APIResponse<number>>(
                    `${Constants.API_ENDPOINT}/${featureEndpoint}/count`
                )
                .pipe(
                    catchError(error => {
                        console.error(error)
                        return [ { data: 0 } ]
                    })
                )
        )

        return response.data ?? 0
    }

    async getListOf<T> (
        featureEndpoint: Feature,
        page: number,
        limit: number,
        keyword?: string
    ): Promise<T> {
        const idSekolah = sessionStorage.getItem('idSekolah')
        const searchKeyword = keyword ?? ''
        const response = await lastValueFrom(
            this.httpClient
                .get<APIResponse<T>>(
                    `${Constants.API_ENDPOINT}/${featureEndpoint}?sekolahID=${idSekolah}&page=${page}&limit=${limit}&keyword=${searchKeyword}`
                )
                .pipe(
                    catchError(error => {
                        console.error(error)
                        return [ { data: null } ]
                    })
                )
        )

        return response.data
    }

    async addOne<T> (
        featureEndpoint: Feature,
        data: T
    ): Promise<APIResponse<StringID>> {
        const response = await lastValueFrom(
            this.httpClient.post<APIResponse<StringID>>(
                `${Constants.API_ENDPOINT}/${featureEndpoint}`,
                data
            )
        )

        return response
    }

    async update<T> (
        id: StringID,
        featureEndpoint: Feature,
        data: Partial<T>
    ): Promise<APIResponse<StringID>> {
        const response = await lastValueFrom(
            this.httpClient.patch<APIResponse<StringID>>(
                `${Constants.API_ENDPOINT}/${featureEndpoint}?id=${id}`,
                data
            )
        )

        return response
    }
}
