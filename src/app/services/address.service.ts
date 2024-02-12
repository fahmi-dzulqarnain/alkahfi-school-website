import { Injectable } from '@angular/core'
import { Localities } from '../model/localities.model'

@Injectable({
    providedIn: 'root'
})
export class AddressService {

    constructor () { }

    batamLocalities: Localities[] = [
        {
            kecamatan: "Batam Kota",
            kelurahan: [
                "Baloi Permai", "Belian",
                "Sukajadi", "Sungai Panas",
                "Taman Baloi", "Teluk Tering"
            ]
        },
        {
            kecamatan: "Batu Aji",
            kelurahan: [
                "Bukit Tempayan", "Buliang",
                "Kibing", "Tanjung Uncang"
            ]
        },
        {
            kecamatan: "Batu Ampar",
            kelurahan: [
                "Batu Merah", "Kampung Seraya",
                "Sungai Jodoh", "Tanjung Sengkuang"
            ]
        },
        {
            kecamatan: "Belakang Padang",
            kelurahan: [
                "Kasu", "Pecong", "Pemping",
                "Pulau Terong", "Sekanak Raya", "Tanjung Sari"
            ]
        },
        {
            kecamatan: "Bengkong",
            kelurahan: [
                "Bengkong Indah", "Bengkong Laut",
                "Sadai", "Tanjung Buntung"
            ]
        },
        {
            kecamatan: "Bulang",
            kelurahan: [
                "Batu Legong", "Bulang Lintang",
                "Pantai Gelam", "Pulau Buluh",
                "Setokok", "Temoyong"
            ]
        },
        {
            kecamatan: "Galang",
            kelurahan: [
                "Air Raja", "Galang Baru", "Karas",
                "Pulau Abang", "Rempang Cate", "Sembulang",
                "Sijantung", "Subang Mas"
            ]
        },
        {
            kecamatan: "Lubuk Baja",
            kelurahan: [
                "Baloi Indah", "Batu Selicin",
                "Kampung Pelita", "Lubuk Baja Kota", "Tanjung Uma"
            ]
        },
        {
            kecamatan: "Nongsa",
            kelurahan: [
                "Batu Besar", "Kabil",
                "Ngenang", "Sambau"
            ]
        },
        {
            kecamatan: "Sagulung",
            kelurahan: [
                "Sagulung Kota", "Sungai Binti",
                "Sungai Langkai", "Sungai Lekop",
                "Sungai Pelunggut", "Tembesi"
            ]
        },
        {
            kecamatan: "Sei Beduk",
            kelurahan: [
                "Duriangkang", "Mangsang",
                "Muka Kuning", "Tanjung Piayu"
            ]
        },
        {
            kecamatan: "Sekupang",
            kelurahan: [
                "Patam Lestari", "Sungai Harapan",
                "Tanjung Pinggir", "Tanjung Riau",
                "Tiban Baru", "Tiban Indah", "Tiban Lama"
            ]
        },
    ]
}
