import { Injectable } from '@angular/core'
import { BaseAPIService } from '../shared/base-api.service'
import { Feature } from 'src/app/model/enum/feature.enum'

@Injectable()
export class FAQService extends BaseAPIService {
    async getCount (): Promise<number> {
        return await this.getCountOf(Feature.FAQ)
    }
}
