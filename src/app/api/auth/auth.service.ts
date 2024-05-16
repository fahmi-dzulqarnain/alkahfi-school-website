import { HttpClient } from '@angular/common/http'
import { inject, Injectable, signal } from '@angular/core'
import { LoginResponse } from './model/login-response.model'
import { Constants } from '../config/constant'

@Injectable({ providedIn: 'root' })
export class AuthService {
    httpClient = inject(HttpClient)
    endpoint = `${Constants.API_ENDPOINT}/auth/`
    currentUser = signal<LoginResponse | undefined | null>(undefined)
}
