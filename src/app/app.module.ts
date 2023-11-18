import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { StepsComponent } from './steps/steps.component';
import { TentangComponent } from './tentang/tentang.component';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { QuestionsComponent } from './questions/questions.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNewsComponent } from './admin/admin-news/admin-news.component';
import { AdminGalleriesComponent } from './admin/admin-galleries/admin-galleries.component';
import { AdminQuestionsComponent } from './admin/admin-questions/admin-questions.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';

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
    AdminAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
