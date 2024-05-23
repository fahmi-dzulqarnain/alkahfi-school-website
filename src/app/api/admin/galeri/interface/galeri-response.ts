import { Galeri } from 'src/app/model/galeri.model'

export interface GaleriResponse {
    totalPage: number
    totalRecords: number
    galeriList: Galeri[]
}
