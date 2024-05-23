import { StatusBerita } from '../enum/status-berita.enum'

export interface Berita {
    id?: string
    judul: string
    gambarIlustrasi?: string
    kontenHTML: string
    kontenPreview?: string
    createdAt?: string
    penyusunID?: string
    sekolahID?: string
    status: StatusBerita
}
