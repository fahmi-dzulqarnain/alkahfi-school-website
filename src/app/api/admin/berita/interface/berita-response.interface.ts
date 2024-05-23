import { Berita } from 'src/app/admin/admin-news/model/interface/berita.model'

export interface BeritaResponse {
    page: number
    beritaCountInPage: number
    totalPage: number
    totalRecords: number
    isHasNextPage: boolean
    beritaList: Berita[]
}
