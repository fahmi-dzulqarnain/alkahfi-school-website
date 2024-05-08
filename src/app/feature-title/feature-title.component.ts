import { Component, input, Input } from '@angular/core';
import { IconSizes } from './model/icon-size.enum';

@Component({
  selector: 'feature-title',
  templateUrl: './feature-title.component.html',
  styleUrl: './feature-title.component.scss'
})
export class FeatureTitleComponent {
    @Input() iconPath: string
    @Input() title: string
    @Input() iconSize: IconSizes
}
