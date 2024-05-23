import { Component, input, output } from '@angular/core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ButtonModel } from 'src/app/model/button.model'

@Component({
    selector: 'data-menu-bar',
    templateUrl: './data-menu-bar.component.html',
    styleUrls: [ './data-menu-bar.component.scss' ],
})
export class DataMenuBarComponent {
    buttons = input.required<ButtonModel[]>()
    isButtonCentered = input<boolean>(false)
    searchKeyword = output<string>()

    faSearch = faSearch

    onSearch (keyword: any) {
        const finalKeyword = keyword.target.value
        if (typeof finalKeyword === 'string') {
            if (finalKeyword.length > 3) {
                this.searchKeyword.emit(finalKeyword)
            } else if (finalKeyword.length === 0) {
                this.searchKeyword.emit(finalKeyword)
            }
        }
    }
}
