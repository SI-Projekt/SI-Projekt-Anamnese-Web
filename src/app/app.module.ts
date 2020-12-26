import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AdmissionComponent } from './admission/admission.component'
import { HomeComponent } from './home/home.component'
import { AdministrationComponent } from './administration/administration.component'
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    HomeComponent,
    AdministrationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
