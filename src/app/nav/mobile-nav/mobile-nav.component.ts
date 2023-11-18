import { Component, Input } from '@angular/core'

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent {

    toggleMenu() {
        const toggleClass = (element: any, className: any) => element.classList.toggle(className);

        toggleClass(document.querySelector(".dropdown_menu"), "open")
        toggleClass(document.querySelector(".toggle_btn i"), "fa-xmark")
    }
}
