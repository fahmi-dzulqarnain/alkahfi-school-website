import { Component, input, Input } from '@angular/core'

@Component({
    selector: 'card-overview',
    templateUrl: './card-overview.component.html',
    styleUrls: [ './card-overview.component.scss' ],
})
export class CardOverviewComponent {
    titleOverview = input.required<string>()
    countOverview = input.required<string>()
    imageURL = input.required<string>()
}
