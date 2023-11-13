import { Component } from "@angular/core";

@Component({
    selector:'tentang',
    templateUrl: './tentang.component.html',
    styleUrls: ['./tentang.component.scss']
})

export class TentangComponent {
    judul = "Header Baru"
    gambar_tkit = 'assets/FI-TK@2x.png'

    hello(name: string) {
        alert(`Halo ${name.toUpperCase()}`)
    }
}