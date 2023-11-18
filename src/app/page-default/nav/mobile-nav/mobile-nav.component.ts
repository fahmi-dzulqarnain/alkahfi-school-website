import { Component } from '@angular/core'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent {

    iconMenu = faBars

    toggleMenu() {
        const toggleClass = (element: any, className: any) => element.classList.toggle(className);

        toggleClass(document.querySelector(".dropdown_menu"), "open")

        if (this.iconMenu == faBars) {
            this.iconMenu = faXmark
        } else {
            this.iconMenu = faBars
        }
    }
}
