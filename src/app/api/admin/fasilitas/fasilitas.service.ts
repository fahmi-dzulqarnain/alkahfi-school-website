import { Injectable } from '@angular/core'
import { CountAPIService } from '../shared/count-api.service'

@Injectable()
export class FasilitasService extends CountAPIService {
    async getCount (): Promise<number> {
        return await this.getCountOf('fasilitas')
    }
}
