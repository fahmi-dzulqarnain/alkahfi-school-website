import { Component, inject, input, OnInit, signal } from '@angular/core'
import { AkreditasiService } from 'src/app/api/admin/akreditasi/akreditasi.service'
import { Akreditasi } from 'src/app/model/akreditasi.model'
import { Sekolah } from 'src/app/model/sekolah.model'
import { DaysService } from 'src/app/services/days.service'
import { convertObjectToArray } from 'src/app/utilities/public-function.utilities'

@Component({
    selector: 'steps',
    templateUrl: './steps.component.html',
    styleUrls: [ './steps.component.scss' ],
})
export class StepsComponent implements OnInit {
    sekolah = input.required<Sekolah>()
    hariBelajar = signal<string>('')
    waktuBelajar = signal<string>('')
    akreditasi = signal<Akreditasi>({
        id: '',
        nilai: '',
        tahun: '',
    })

    private akreditasiService = inject(AkreditasiService)
    private daysService = inject(DaysService)

    ngOnInit (): void {
        setTimeout(() => {
            this.hariBelajar.set(
                this.generateLearnDays(this.sekolah().hariBelajar)
            )
            this.waktuBelajar.set(this.sekolah().jamBelajar)
        }, 1000)

        this.getAkreditasi()
    }

    generateLearnDays (hariBelajar: any): string {
        const hariBelajarString = hariBelajar as unknown as string
        const hariBelajarArray = hariBelajarString
            .replace('{', '')
            .replace('}', '')
            .replaceAll('"', '')
            .split(',')

        const dayWithIndex = this.daysService.days.map(
            day => day.name
        ) as unknown as string[]

        const sortedDays = dayWithIndex.flatMap(day => {
            const index = hariBelajarArray.indexOf(day)
            return hariBelajarArray[index]
        })

        return this.formatDays(sortedDays)
    }

    formatDays (days: string[]): string {
        const dayNames = days.filter(day => day !== undefined) as string[]

        if (dayNames.length === 0) {
            return ''
        }

        const result: string[] = []
        let startIndex = 0

        for (let i = 1; i <= dayNames.length; i++) {
            if (
                i === dayNames.length ||
                days.indexOf(dayNames[i]) - days.indexOf(dayNames[i - 1]) > 1
            ) {
                if (startIndex === i - 1) {
                    result.push(dayNames[startIndex])
                } else {
                    result.push(`${dayNames[startIndex]} - ${dayNames[i - 1]}`)
                }
                startIndex = i
            }
        }

        return result.join(', ')
    }

    getAkreditasi (): void {
        this.akreditasiService.getLatestAkreditasi().then(akreditasi => {
            this.akreditasi.set(akreditasi)
        })
    }
}
