import { Component, Input } from '@angular/core'
import { LogoSizes } from './model/logo-size.enum'

@Component({
  selector: 'logo-branding',
  templateUrl: './logo-branding.component.html',
  styleUrls: ['./logo-branding.component.scss']
})
export class LogoBrandingComponent {

    @Input() isVerticalOrientation: boolean
    @Input() logoSize: LogoSizes
    @Input() logoPath = "assets/FI-TK@2x.png"
    @Input() title = "TKIT Fajar Ilahi"
}
