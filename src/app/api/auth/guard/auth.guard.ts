import { inject } from '@angular/core'
import { AuthService } from '../auth.service'
import { RouterService } from 'src/app/router/router.service'

export const authGuard = () => {
    const authServices = inject(AuthService)
    const routeTo = inject(RouterService)
    const accessToken = sessionStorage.getItem('accessToken')

    if (accessToken === null) {
        routeTo.toAuth.login()
    }

    authServices.validateToken(accessToken).then(isTokenValid => {
        if (isTokenValid === false) {
            routeTo.toAuth.login()
        }
    })
}
