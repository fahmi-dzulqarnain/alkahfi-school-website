import { Component } from "@angular/core";

@Component({
    selector:'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {
    judul = "Header Baru"
    gambar_tkit = 'assets/FI-TK@2x.png'

    hello(name: string) {
        alert(`Halo ${name.toUpperCase()}`)
    }
}