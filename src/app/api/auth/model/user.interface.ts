import { Sekolah } from 'src/app/model/sekolah.model'
import { Role } from './role.interface'

export interface UserInterface {
    id: string
    email: string
    createdAt: string
    sekolah: Sekolah[]
    role?: Role
}
