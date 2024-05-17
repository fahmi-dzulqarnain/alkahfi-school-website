import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Constants } from '../config/constant'
import { APIResponse } from '../public/types/api-response.type'
import { catchError, lastValueFrom } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AuthService {
    httpClient = inject(HttpClient)
    endpoint = `${Constants.API_ENDPOINT}/auth/`
    isTokenValid = false

    async validateToken (token: string): Promise<boolean> {
        const body = { token }
        const response = await lastValueFrom(
            this.httpClient
                .post<APIResponse<boolean>>(
                    `${this.endpoint}isTokenValid`,
                    body
                )
                .pipe(
                    catchError(() => {
                        this.isTokenValid = false
                        return [ { data: this.isTokenValid } ]
                    })
                )
        )

        return response.data
    }
}
