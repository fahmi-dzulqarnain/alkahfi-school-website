import { Component, inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import {
    faKey,
    faEnvelope,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { LogoSize } from '../../components/logo-branding/model/logo-size.enum'
import { AuthService } from 'src/app/api/auth/auth.service'
import { SignInDTO } from 'src/app/api/auth/model/dto/sign-in.dto'
import { LoginResponse } from 'src/app/api/auth/model/login-response.model'
import { APIResponse } from 'src/app/api/public/types/api-response.type'
import { RouterService } from 'src/app/router/router.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ],
})
export class LoginComponent implements OnInit {
    formBuilder = inject(FormBuilder)
    authService = inject(AuthService)
    router = inject(RouterService)

    faEnvelope: IconDefinition = faEnvelope
    faKey: IconDefinition = faKey

    isVerticalOrientation = true
    isMobile: boolean = false
    logoSize = LogoSize.large
    blockChars: RegExp = /^[^<>*!]+$/

    loginForm: FormGroup = this.formBuilder.nonNullable.group({
        email: '',
        password: '',
    })

    ngOnInit () {
        this.isMobile = window.innerWidth <= 991
        window.onresize = () => (this.isMobile = window.innerWidth <= 991)
    }

    onSubmit () {
        const dto: SignInDTO = this.loginForm.value
        this.login(dto)
    }

    login (dto: SignInDTO): void {
        this.authService.httpClient
            .post<APIResponse<LoginResponse>>(
                `${this.authService.endpoint}signIn`,
                dto
            )
            .subscribe({
                next: response => {
                    localStorage.setItem(
                        'accessToken',
                        response.data.accessToken
                    )

                    this.authService.currentUser.set(response.data)

                    this.router.toAdmin.ringkasanData()
                },
                error: (error: APIResponse<null>) => {
                    console.error(error)
                },
            })
    }
}
