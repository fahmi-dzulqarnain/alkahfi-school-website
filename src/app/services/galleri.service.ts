import { Injectable } from '@angular/core';

@Injectable()
export class GalleriService {
    getProductsData() {
        return [
            {
                id: '1000',
                judulFoto: 'Ayam berperestasi membaca internasional',
                kontenFoto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
                tanggalKirim: '2 Maret 2024',
                penulis: 'admin',
                inventoryStatus: 'INSTOCK',
            },
            {
                id: '1001',
                judulFoto: 'Ayam berperestasi membaca internasional',
                kontenFoto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
                tanggalKirim: '2 Maret 2024',
                penulis: 'admin',
                inventoryStatus: 'OUTOFSTOCK'
            },
            {
                id: '1002',
                judulFoto: 'Ayam berperestasi membaca internasional',
                kontenFoto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque voluptates quod iste ad dolorem obcaecati error',
                tanggalKirim: '2 Maret 2024',
                penulis: 'admin',
                inventoryStatus: 'LOWSTOCK'
            }
        ];
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

};
