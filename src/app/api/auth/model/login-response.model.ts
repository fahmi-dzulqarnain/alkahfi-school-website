import { Sekolah } from 'src/app/model/sekolah.model'
import { UserInterface } from './user.interface'

export interface LoginResponse {
    accessToken: string
    akun: UserInterface
}
