import { Component, input, OnInit } from '@angular/core'
import { Sekolah } from 'src/app/model/sekolah.model'
import { StringID } from 'src/app/model/types/string.types'

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent {
    sekolah = input.required<Sekolah>()
}
