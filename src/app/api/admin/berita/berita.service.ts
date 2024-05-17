import { Injectable } from '@angular/core'
import { CountAPIService } from '../shared/count-api.service'

@Injectable()
export class BeritaService extends CountAPIService {
    async getCount (): Promise<number> {
        return await this.getCountOf('berita')
    }
}
