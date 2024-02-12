import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { Constants } from './api/config/constant'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AutoCompleteModule } from 'primeng/autocomplete'
import { AvatarModule } from 'primeng/avatar'
import { ButtonModule } from 'primeng/button'
import { CalendarModule } from 'primeng/calendar'
import { CardModule } from 'primeng/card'
import { ChipModule } from 'primeng/chip'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { DataViewModule } from 'primeng/dataview'
import { DropdownModule } from 'primeng/dropdown'
import { FileUploadModule } from 'primeng/fileupload'
import { ImageModule } from 'primeng/image'
import { InputMaskModule } from 'primeng/inputmask'
import { InputNumberModule } from 'primeng/inputnumber'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { InputTextModule } from 'primeng/inputtext'
import { KeyFilterModule } from 'primeng/keyfilter'
import { MenubarModule } from 'primeng/menubar'
import { PasswordModule } from 'primeng/password'
import { RatingModule } from 'primeng/rating'
import { RippleModule } from 'primeng/ripple'
import { SelectButtonModule } from 'primeng/selectbutton'
import { SidebarModule } from 'primeng/sidebar'
import { SkeletonModule } from 'primeng/skeleton'
import { TableModule } from 'primeng/table'
import { TagModule } from 'primeng/tag'
import { ToastModule } from 'primeng/toast'
import { ToggleButtonModule } from 'primeng/togglebutton'

import { HeaderComponent } from './page-default/header/header.component'
import { NavComponent } from './page-default/nav/nav.component'
import { StepsComponent } from './page-default/steps/steps.component'
import { TentangComponent } from './page-default/tentang/tentang.component'
import { NewsComponent } from './page-default/news/news.component'
import { GalleryComponent } from './page-default/gallery/gallery.component'
import { QuestionsComponent } from './page-default/questions/questions.component'
import { AboutComponent } from './page-default/about/about.component'
import { FooterComponent } from './page-default/footer/footer.component'
import { AdminComponent } from './admin/admin.component'
import { LoginComponent } from './login/login.component'
import { AdminHomeComponent } from './admin/admin-home/admin-home.component'
import { AdminNewsComponent } from './admin/admin-news/admin-news.component'
import { AdminGalleriesComponent } from './admin/admin-galleries/admin-galleries.component'
import { AdminQuestionsComponent } from './admin/admin-questions/admin-questions.component'
import { AdminAboutComponent } from './admin/admin-about/admin-about.component'
import { MobileNavComponent } from './page-default/nav/mobile-nav/mobile-nav.component'
import { PageDefaultComponent } from './page-default/page-default.component'
import { NewsDetailComponent } from './page-default/news/news-detail/news-detail.component'
import { NewsMoreComponent } from './page-default/news/news-more/news-more.component'
import { LogoBrandingComponent } from './components/logo-branding/logo-branding.component';
import { MenuBarComponent } from './admin/menu-bar/menu-bar.component';
import { MenuProfileComponent } from './admin/menu-profile/menu-profile.component';
import { AdminContainerComponent } from './admin/admin-container/admin-container.component';
import { AdminSekolahInformasiComponent } from './admin/admin-sekolah-informasi/admin-sekolah-informasi.component';
import { AdminSekolahAkreditasiComponent } from './admin/admin-sekolah-akreditasi/admin-sekolah-akreditasi.component';
import { AdminSekolahFasilitasComponent } from './admin/admin-sekolah-fasilitas/admin-sekolah-fasilitas.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { DataMenuBarComponent } from './components/data-menu-bar/data-menu-bar.component';
import { DataMenuButtonComponent } from './components/data-menu-button/data-menu-button.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        StepsComponent,
        TentangComponent,
        NewsComponent,
        GalleryComponent,
        QuestionsComponent,
        AboutComponent,
        FooterComponent,
        AdminComponent,
        LoginComponent,
        AdminHomeComponent,
        AdminNewsComponent,
        AdminGalleriesComponent,
        AdminQuestionsComponent,
        AdminAboutComponent,
        MobileNavComponent,
        PageDefaultComponent,
        NewsDetailComponent,
        NewsMoreComponent,
        LogoBrandingComponent,
        MenuBarComponent,
        MenuProfileComponent,
        AdminContainerComponent,
        AdminSekolahInformasiComponent,
        AdminSekolahAkreditasiComponent,
        AdminSekolahFasilitasComponent,
        NoDataComponent,
        DataMenuBarComponent,
        DataMenuButtonComponent,
    ],
    imports: [
        AppRoutingModule,
        AutoCompleteModule,
        AvatarModule,
        BrowserAnimationsModule,
        BrowserModule,
        BrowserModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        ChipModule,
        ConfirmDialogModule,
        DataViewModule,
        DropdownModule,
        FileUploadModule,
        FontAwesomeModule,
        HttpClientModule,
        ImageModule,
        InputMaskModule,
        InputNumberModule,
        InputTextareaModule,
        InputTextModule,
        KeyFilterModule,
        MenubarModule,
        PasswordModule,
        RatingModule,
        ReactiveFormsModule,
        RippleModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        TableModule,
        TagModule,
        ToastModule,
        ToggleButtonModule
    ],
    providers: [Constants],
    bootstrap: [AppComponent]
})
export class AppModule { }
