import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'data-menu-button',
  templateUrl: './data-menu-button.component.html',
  styleUrls: ['./data-menu-button.component.scss']
})
export class DataMenuButtonComponent {
    @Input() icon: IconDefinition
    @Input() title: string
    @Input() onClick: () => void
}
