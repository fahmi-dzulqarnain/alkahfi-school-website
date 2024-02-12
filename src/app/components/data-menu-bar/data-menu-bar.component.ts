import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { ButtonModel } from 'src/app/model/button.model'

@Component({
  selector: 'data-menu-bar',
  templateUrl: './data-menu-bar.component.html',
  styleUrls: ['./data-menu-bar.component.scss']
})
export class DataMenuBarComponent {
    @Input() buttons: ButtonModel[]
}
