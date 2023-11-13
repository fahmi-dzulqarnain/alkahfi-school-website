import { Component } from "@angular/core";

@Component({
    selector:'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    judul = "Header Baru"
    gambar_tkit = 'assets/FI-TK@2x.png'

    hello(name: string) {
        alert(`Halo ${name.toUpperCase()}`)
    }
}