import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { faBuilding, faChartPie, faInfoCircle, faNewspaper, faPhotoVideo, faSchool, faStar } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from 'primeng/api'
import { Constants } from 'src/app/api/config/constant'
import { LogoSize } from 'src/app/components/logo-branding/model/logo-size.enum'

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
    private iconPrefix = ""
    isVerticalOrientation = false
    logoSize = LogoSize.small

    menus: MenuItem[]

    constructor (
        private router: Router,
        constant: Constants
    ) {
        this.iconPrefix = constant.ICON_PREFIX
    }

    ngOnInit() {
        this.configureMenu()
    }

    configureMenu() {
        this.menus = [
            {
                label: 'Ringkasan Data',
                icon: this.iconPrefix + faChartPie.iconName,
                command: () => { this.navigateToRingkasanData() }
            },
            {
                label: 'Sekolah',
                icon: this.iconPrefix + faSchool.iconName,
                items: this.configureMenuSekolah()
            },
            {
                label: 'Berita',
                icon: this.iconPrefix + faNewspaper.iconName,
                command: () => { this.navigateToBerita() }
            },
            {
                label: 'Galeri',
                icon: this.iconPrefix + faPhotoVideo.iconName,
                command: () => { this.navigateToGaleri() }
            }
        ]
    }

    configureMenuSekolah(): MenuItem[] {
        return [
            {
                label: 'Detail Informasi',
                icon: this.iconPrefix + faInfoCircle.iconName,
                command: () => { this.navigateToSekolahInformasi() }
            },
            {
                label: 'Akreditasi',
                icon: this.iconPrefix + faStar.iconName,
                command: () => { this.navigateToSekolahAkreditasi() }
            },
            {
                label: 'Fasilitas',
                icon: this.iconPrefix + faBuilding.iconName,
                command: () => { this.navigateToSekolahFasilitas() }
            },
        ]
    }

    navigateToBerita() {
        this.router.navigate(['admin', 'berita'])
    }

    navigateToGaleri() {
        this.router.navigate(['admin', 'galeri'])
    }

    navigateToRingkasanData() {
        this.router.navigate(['admin', 'ringkasan'])
    }

    navigateToSekolahInformasi() {
        this.router.navigate(['admin', 'sekolah', 'informasi'])
    }

    navigateToSekolahAkreditasi() {
        this.router.navigate(['admin', 'sekolah', 'akreditasi'])
    }

    navigateToSekolahFasilitas() {
        this.router.navigate(['admin', 'sekolah', 'fasilitas'])
    }
}
