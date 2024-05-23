import { capitalize } from '../utilities/string.utilities'
import { Feature } from './enum/feature.enum'
import { FormTitle } from './types/string.types'

export class TitleOf {
    public static list (feature: Feature): FormTitle {
        return `Daftar ${feature}`
    }
    public static detail (feature: Feature): FormTitle {
        return `Detail ${capitalize(feature)}`
    }
    public static tambah (feature: Feature): FormTitle {
        return `Tambah ${capitalize(feature)}`
    }
    public static ubah (feature: Feature): FormTitle {
        return `Ubah ${feature}`
    }
}
