import { Injectable } from '@angular/core'
import { Option } from '../model/option.model'

@Injectable({
    providedIn: 'root'
})
export class DaysService {

    constructor () { }

    days: Option[] = [
        { name: "Ahad", value: 1 },
        { name: 'Senin', value: 2 },
        { name: 'Selasa', value: 3 },
        { name: 'Rabu', value: 4 },
        { name: 'Kamis', value: 5 },
        { name: 'Jumat', value: 6 },
        { name: 'Sabtu', value: 7 }
    ]
}
