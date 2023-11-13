import { Component } from "@angular/core";

@Component({
    selector:'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
    judul = "Header Baru"
    gambar_tkit = 'assets/FI-TK@2x.png'

    hello(name: string) {
        alert(`Halo ${name.toUpperCase()}`)
    }
}