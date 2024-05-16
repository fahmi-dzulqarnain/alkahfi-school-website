import { inject } from '@angular/core'
import { AuthService } from '../auth.service'
import { RouterService } from 'src/app/router/router.service'

export const authGuard = () => {
    const authServices = inject(AuthService)
    const routeTo = inject(RouterService)

    if (authServices.currentUser() === undefined) {
        routeTo.toAuth.login()
        return false
    }

    if (authServices.currentUser()) {
        return true
    } else {
        routeTo.toAuth.login()
        return false
    }
}
