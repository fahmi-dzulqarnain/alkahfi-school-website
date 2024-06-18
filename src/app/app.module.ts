import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import {
    HttpClientModule,
    provideHttpClient,
    withInterceptors,
} from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './router/app-routing.module'
import { AppComponent } from './app.component'
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
import { EditorModule } from 'primeng/editor'
import { FileUploadModule } from 'primeng/fileupload'
import { GalleriaModule } from 'primeng/galleria'
import { IconFieldModule } from 'primeng/iconfield'
import { ImageModule } from 'primeng/image'
import { InputIconModule } from 'primeng/inputicon'
import { InputMaskModule } from 'primeng/inputmask'
import { InputNumberModule } from 'primeng/inputnumber'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { InputTextModule } from 'primeng/inputtext'
import { KeyFilterModule } from 'primeng/keyfilter'
import { MenubarModule } from 'primeng/menubar'
import { MultiSelectModule } from 'primeng/multiselect'
import { OrderListModule } from 'primeng/orderlist'
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
import { LoginComponent } from './admin/login/login.component'
import { AdminHomeComponent } from './admin/admin-home/admin-home.component'
import { AdminNewsComponent } from './admin/admin-news/admin-news.component'
import { AdminGalleriesComponent } from './admin/admin-galleries/admin-galleries.component'
import { AdminQuestionsComponent } from './admin/admin-questions/admin-questions.component'
import { AdminAboutComponent } from './admin/admin-about/admin-about.component'
import { MobileNavComponent } from './page-default/nav/mobile-nav/mobile-nav.component'
import { PageDefaultComponent } from './page-default/page-default.component'
import { NewsDetailComponent } from './page-default/news/news-detail/news-detail.component'
import { NewsMoreComponent } from './page-default/news/news-more/news-more.component'
import { LogoBrandingComponent } from './components/logo-branding/logo-branding.component'
import { MenuBarComponent } from './admin/menu/menu-bar/menu-bar.component'
import { MenuProfileComponent } from './admin/menu/menu-profile/menu-profile.component'
import { AdminContainerComponent } from './admin/admin-container/admin-container.component'
import { AdminSekolahInformasiComponent } from './admin/admin-sekolah/admin-sekolah-informasi/admin-sekolah-informasi.component'
import { AdminSekolahAkreditasiComponent } from './admin/admin-sekolah/admin-sekolah-akreditasi/admin-sekolah-akreditasi.component'
import { AdminSekolahFasilitasComponent } from './admin/admin-sekolah/admin-sekolah-fasilitas/admin-sekolah-fasilitas.component'
import { NoDataComponent } from './components/no-data/no-data.component'
import { DataMenuBarComponent } from './components/data-menu-bar/data-menu-bar.component'
import { DataMenuButtonComponent } from './components/data-menu-button/data-menu-button.component'
import { FeatureTitleComponent } from './components/feature-title/feature-title.component'
import { authInterceptor } from './api/auth/auth.interceptor'
import { CommonModule } from '@angular/common'
import { ImageContainerComponent } from './components/image-container/image-container.component'
import { CardOverviewComponent } from './components/card-overview/card-overview.component'
import { BeritaService } from './api/admin/berita/berita.service'
import { FAQService } from './api/admin/faq/faq.service'
import { FasilitasService } from './api/admin/fasilitas/fasilitas.service'
import { GaleriService } from './api/admin/galeri/galeri.service'
import { GambarService } from './api/admin/shared/gambar/gambar.service'
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component'
import { PaginatorModule } from 'primeng/paginator'
import { AkreditasiService } from './api/admin/akreditasi/akreditasi.service'
import { SekolahService } from './api/admin/sekolah/sekolah.service'
import { AdminSekolahComponent } from './admin/admin-sekolah/admin-sekolah.component'
import { MessageService } from 'primeng/api'

@NgModule({
    declarations: [
        AboutComponent,
        AdminAboutComponent,
        AdminComponent,
        AdminContainerComponent,
        AdminGalleriesComponent,
        AdminHomeComponent,
        AdminNewsComponent,
        AdminQuestionsComponent,
        AdminSekolahComponent,
        AdminSekolahAkreditasiComponent,
        AdminSekolahFasilitasComponent,
        AdminSekolahInformasiComponent,
        AppComponent,
        CardOverviewComponent,
        DataMenuBarComponent,
        DataMenuButtonComponent,
        FeatureTitleComponent,
        FooterComponent,
        GalleryComponent,
        HeaderComponent,
        ImageContainerComponent,
        LoginComponent,
        LogoBrandingComponent,
        MenuBarComponent,
        MenuProfileComponent,
        MobileNavComponent,
        NavComponent,
        NewsComponent,
        NewsDetailComponent,
        NewsMoreComponent,
        NoDataComponent,
        PageDefaultComponent,
        QuestionsComponent,
        StepsComponent,
        TentangComponent,
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
        CommonModule,
        ConfirmDialogModule,
        DataViewModule,
        DropdownModule,
        EditorModule,
        FileUploadModule,
        FontAwesomeModule,
        GalleriaModule,
        HttpClientModule,
        IconFieldModule,
        ImageUploaderComponent,
        ImageModule,
        InputIconModule,
        InputMaskModule,
        InputNumberModule,
        InputTextareaModule,
        InputTextModule,
        KeyFilterModule,
        MenubarModule,
        MultiSelectModule,
        OrderListModule,
        PaginatorModule,
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
        ToggleButtonModule,
    ],
    providers: [
        AkreditasiService,
        BeritaService,
        FAQService,
        FasilitasService,
        GaleriService,
        GambarService,
        MessageService,
        SekolahService,
        provideHttpClient(withInterceptors([ authInterceptor ])),
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {}
