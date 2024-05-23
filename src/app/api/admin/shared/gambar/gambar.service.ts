import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { lastValueFrom } from 'rxjs'
import { Constants } from 'src/app/api/config/constant'
import { APIResponse } from 'src/app/api/public/types/api-response.type'
import { StringID } from 'src/app/model/types/string.types'

@Injectable()
export class GambarService {
    private httpClient = inject(HttpClient)
    private uploadURL = `gambar/upload`

    async uploadGambar (files: any[]): Promise<string[]> {
        const formData = new FormData()
        for (const file of files) {
            formData.append('images', file)
        }

        const response = await lastValueFrom(
            this.httpClient.post<APIResponse<StringID[]>>(
                `${Constants.API_ENDPOINT}/${this.uploadURL}`,
                formData
            )
        )

        return response.data
    }
}
