import { Component } from "@angular/core";

@Component({
    selector:'nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})

export class NavComponent {
    judul = "Header Baru"
    gambar_tkit = 'assets/FI-TK@2x.png'
    
    hello(name: string) {
        alert(`Halo ${name.toUpperCase()}`)
    }

    toggleMenu() {
        const toggleBtnIcon = (el: any, className: any) => el.classList.toggle(className);
        const toggleClass = (el: any, className: any) => el.classList.toggle(className);
        toggleClass(document.querySelector(".dropdown_menu"), "open")
        toggleBtnIcon(document.querySelector(".toggle_btn i"), "fa-xmark")
    }
}