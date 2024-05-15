import { Component, input, Input, output } from '@angular/core'

@Component({
    selector: 'no-data',
    templateUrl: './no-data.component.html',
    styleUrls: [ './no-data.component.scss' ],
})
export class NoDataComponent {
    imageSource = input.required<string>()
    featureName = input.required<string>()
    hasData = input<boolean>(true)
    onAddData = output<void>()

    getAlt (): string {
        const filename =
            this.imageSource().split('/').pop()?.split('.').shift() || ''
        const alt = filename
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

        return alt
    }

    getTitle (): string {
        if (this.hasData()) {
            return this.interpolateWithFeatureName('Tidak Ada $ Dipilih')
        } else {
            return this.interpolateWithFeatureName('Belum Ada $')
        }
    }

    getDescription (): string {
        if (this.hasData()) {
            return this.interpolateWithFeatureName(
                `Silakan pilih salah satu $ untuk melihat detail atau mengubahnya`
            )
        } else {
            return this.interpolateWithFeatureName(
                'Tekan tombol di bawah untuk menambahkan $'
            )
        }
    }

    interpolateWithFeatureName (label: string): string {
        return label.replace('$', this.featureName())
    }

    onAdd (): void {
        this.onAddData.emit()
    }
}
