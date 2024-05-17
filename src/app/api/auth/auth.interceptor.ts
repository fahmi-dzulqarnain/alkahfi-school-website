import { HttpInterceptorFn } from '@angular/common/http'
import { catchError, throwError } from 'rxjs'

export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const token = sessionStorage.getItem('accessToken')
    if (token) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        })
    }
    return next(request).pipe(
        catchError(error => {
            return throwError(() => error)
        })
    )
}
