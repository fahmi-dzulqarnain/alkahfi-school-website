import { Component } from "@angular/core";

@Component({
    selector:'steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss']
})

export class StepsComponent {
    judul = "Header Baru"
    gambar_tkit = 'assets/FI-TK@2x.png'

    hello(name: string) {
        alert(`Halo ${name.toUpperCase()}`)
    }
}