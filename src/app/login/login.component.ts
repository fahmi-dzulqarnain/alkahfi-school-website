import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { LogoSize } from '../logo-branding/model/logo-size.enum'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup
    faUsername = faUser
    faKey = faKey

    isVerticalOrientation = true
    isMobile: boolean = false
    logoSize = LogoSize.large
    blockChars: RegExp = /^[^<>*!]+$/

    constructor (private builder: FormBuilder) { }

    ngOnInit() {
        this.isMobile = window.innerWidth <= 991
        this.loginForm = this.builder.group({
            username: '',
            password: '',
            message: ''
        })

        window.onresize = () => this.isMobile = window.innerWidth <= 991
    }

    onSubmit() {
        // TODO: Perform REST API Call
    }
}
