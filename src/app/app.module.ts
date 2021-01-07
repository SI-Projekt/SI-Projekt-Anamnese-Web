import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AdmissionComponent } from './components/admission/admission.component'
import { HomePatientComponent } from './components/home-patient/home-patient.component'
import { HeaderComponent } from './components/header/header.component'
import { LogInComponent } from './components/log-in/log-in.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { LoginService } from './components/log-in/login.service'
import { HttpClientModule } from '@angular/common/http'
import { AppConfigService } from './core/app-config.service'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { CommonModule } from '@angular/common'
import { MatInputModule } from '@angular/material/input'
import { HomePersonalComponent } from './components/home-personal/home-personal.component'
import { MatTooltipModule } from '@angular/material/tooltip'
import { PatientInfoViewComponent } from './components/patient-info-view/patient-info-view.component'
import { PersonalInfoViewComponent } from './components/personal-info-view/personal-info-view.component'
import { MatTabsModule } from '@angular/material/tabs'
import { PatientListComponent } from './components/personal-info-view/patient-list/patient-list.component'
import { DiagnosisListComponent } from './components/personal-info-view/diagnosis-list/diagnosis-list.component'
import { NewRegistrationComponent } from './components/log-in/new-registration/new-registration.component'
import { ResetPasswordComponent } from './components/log-in/reset-password/reset-password.component'
import { BackgroundComponent } from './components/background/background.component'
import { MatTableModule } from '@angular/material/table'
import { DiseaseListComponent } from './components/personal-info-view/disease-list/disease-list.component'
import { MatButtonModule } from '@angular/material/button'
import { MatStepperModule } from '@angular/material/stepper'
import { MatSelectModule } from '@angular/material/select'
import { AllergyListComponent } from './components/personal-info-view/allergy-list/allergy-list.component'
import { MedicationInTakeListComponent } from './components/personal-info-view/medication-in-take-list/medication-in-take-list.component'
import { MyProfileModalComponent } from './components/home-patient/my-profile-modal/my-profile-modal.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'


const angularMaterialModules = [
  MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatSnackBarModule,
  MatTooltipModule, MatTabsModule, MatTableModule, MatButtonModule, MatDialogModule
]

@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    HomePatientComponent,
    HeaderComponent,
    LogInComponent,
    HomePersonalComponent,
    PatientInfoViewComponent,
    PersonalInfoViewComponent,
    PatientListComponent,
    DiagnosisListComponent,
    DiseaseListComponent,
    NewRegistrationComponent,
    ResetPasswordComponent,
    AllergyListComponent,
    MedicationInTakeListComponent,
    BackgroundComponent,
    MyProfileModalComponent
  ],

  imports: [
    angularMaterialModules,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, CommonModule, MatButtonModule, MatStepperModule, MatSelectModule, MatDividerModule,
    FormsModule, ReactiveFormsModule, CommonModule, MatDividerModule,
  ],

  providers: [
    angularMaterialModules,
    LoginService,
    AppConfigService,
    MyProfileModalComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
