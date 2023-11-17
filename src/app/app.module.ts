import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './authentification/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AcceuilApprenantComponent } from './apprenant/acceuil-apprenant/acceuil-apprenant.component';
import { AcceuilFormateurComponent } from './formateur/acceuil-formateur/acceuil-formateur.component';
import { AcceuilAdminComponent } from './admin/acceuil-admin/acceuil-admin.component';
import { ListeFormateursComponent } from './admin/formateurs/liste-formateurs/liste-formateurs.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AcceuilApprenantComponent,
    AcceuilFormateurComponent,
    AcceuilAdminComponent,
    ListeFormateursComponent
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
