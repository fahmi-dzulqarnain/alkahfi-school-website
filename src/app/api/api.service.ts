import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { Constants } from './config/constant'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private apiUrl: string
    private authToken: string | null = null

    constructor (
        private http: HttpClient,
        constant: Constants
    ) {
        this.apiUrl = constant.API_ENDPOINT
    }

    setAuthToken(token: string): void {
        this.authToken = token
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.authToken}`,
        })
    }

    get<T>(endpoint: string): Observable<T> {
        const headers = this.getHeaders()

        return this.http.get<T>(
            `${this.apiUrl}/${endpoint}`,
            { headers }
        ).pipe(
            tap((response) => console.log(
                `GET request to ${endpoint} successful:`,
                response
            )),
            catchError((error) => {
                console.error(`Error in GET request to ${endpoint}:`, error)
                throw error
            })
        )
    }

    post<T>(
        endpoint: string,
        body: any
    ): Observable<T> {

        const headers = this.getHeaders()

        return this.http.post<T>(
            `${this.apiUrl}/${endpoint}`,
            body,
            { headers }
        ).pipe(
            tap((response) => console.log(
                `POST request to ${endpoint} successful:`,
                response
            )),
            catchError((error) => {
                console.error(`Error in POST request to ${endpoint}:`, error)
                throw error
            })
        )
    }

    put<T>(
        endpoint: string,
        body: any
    ): Observable<T> {

        const headers = this.getHeaders()

        return this.http.put<T>(
            `${this.apiUrl}/${endpoint}`,
            body,
            { headers }
        ).pipe(
            tap((response) => console.log(
                `PUT request to ${endpoint} successful:`,
                response
            )),
            catchError((error) => {
                console.error(`Error in PUT request to ${endpoint}:`, error)
                throw error
            })
        )
    }

    delete<T>(endpoint: string): Observable<T> {
        const headers = this.getHeaders()

        return this.http.delete<T>(
            `${this.apiUrl}/${endpoint}`,
            { headers }
        ).pipe(
            tap((response) => console.log(
                `DELETE request to ${endpoint} successful:`,
                response
            )),
            catchError((error) => {
                console.error(`Error in DELETE request to ${endpoint}:`, error)
                throw error
            })
        )
    }
}
