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
import { Message } from 'primeng/api'

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

    messages: Message[] | undefined
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
                    sessionStorage.setItem(
                        'accessToken',
                        response.data.accessToken
                    )
                    sessionStorage.setItem('idUser', response.data.akun.id)
                    sessionStorage.setItem(
                        'idSekolah',
                        response.data.akun.sekolah[0].id
                    )

                    const features = response.data.akun.role?.features

                    if (features) {
                        sessionStorage.setItem(
                            'features',
                            JSON.stringify(features)
                        )
                    }

                    this.router.toAdmin.ringkasanData()
                },
                error: (error: any) => {
                    console.error(error)
                    this.messages = [
                        {
                            severity: 'error',
                            summary: (error.error as APIResponse<null>).message,
                        },
                    ]
                },
            })
    }
}
