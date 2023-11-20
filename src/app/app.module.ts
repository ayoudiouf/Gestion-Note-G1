import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './authentification/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AcceuilApprenantComponent } from './apprenant/acceuil-apprenant/acceuil-apprenant.component';
import { AcceuilFormateurComponent } from './formateur/acceuil-formateur/acceuil-formateur.component';
import { AcceuilAdminComponent } from './admin/acceuil-admin/acceuil-admin.component';
import { AjouterEvaluationComponent } from './formateur/gestionEvaluation/ajouter-evaluation/ajouter-evaluation.component';
import { ListerEvaluationComponent } from './formateur/gestionEvaluation/lister-evaluation/lister-evaluation.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ModifierEvaluationComponent } from './formateur/gestionEvaluation/modifier-evaluation/modifier-evaluation.component';
import { GestionApprenantComponent } from './admin/gestion-apprenant/gestion-apprenant.component';
import { GestionClasseComponent } from './admin/gestion-classe/gestion-classe.component';
import { GestionMatiereComponent } from './admin/gestion-matiere/gestion-matiere.component';
import { UserIdToUsernamePipe } from './pipes/user-id-to-username.pipe';
import { ClasseIdToClasseNamePipe } from './pipes/classe-id-to-classe-name.pipe';
import { GestionFormateurComponent } from './admin/gestion-formateur/gestion-formateur.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AcceuilApprenantComponent,
    AcceuilFormateurComponent,
    AcceuilAdminComponent,
    AjouterEvaluationComponent,
    ListerEvaluationComponent,
    HeaderComponent,
    FooterComponent,
    ModifierEvaluationComponent,
    GestionApprenantComponent,
    GestionClasseComponent,
    GestionMatiereComponent,
    UserIdToUsernamePipe,
    ClasseIdToClasseNamePipe,
    GestionFormateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
