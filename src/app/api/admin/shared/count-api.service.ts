import { HttpClient } from '@angular/common/http'
import { inject } from '@angular/core'
import { lastValueFrom, catchError } from 'rxjs'
import { Constants } from '../../config/constant'
import { APIResponse } from '../../public/types/api-response.type'

export class CountAPIService {
    httpClient = inject(HttpClient)

    async getCountOf (featureEndpoint: string): Promise<number> {
        let count = 0

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

        count = response.data

        return count
    }
}
