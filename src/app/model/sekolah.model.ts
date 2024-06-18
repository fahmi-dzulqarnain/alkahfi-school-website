import { Kategori } from './kategori.model'

export interface Sekolah {
    id?: string
    namaSekolah: string
    npsn: string
    alamat: string
    kelurahan: string
    kecamatan: string
    kota: string
    email: string
    noTelp: string
    tahunDidirikan: string
    logo: string
    slogan: string
    hariBelajar: string[]
    jamBelajar: string
    tautanWebsite: string
    kategori?: Kategori[]
    kategoriIDs?: string[]
}
