import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentification/auth/auth.component';
import { AcceuilAdminComponent } from './admin/acceuil-admin/acceuil-admin.component';
import { AcceuilFormateurComponent } from './formateur/acceuil-formateur/acceuil-formateur.component';
import { AcceuilApprenantComponent } from './apprenant/acceuil-apprenant/acceuil-apprenant.component';
import { ListeFormateursComponent } from './admin/formateurs/liste-formateurs/liste-formateurs.component';

const routes: Routes = [
  {path: 'connexion', component:AuthComponent},
  {path: 'acceuil-admin', component:AcceuilAdminComponent},
  {path: 'acceuil-formateur', component:AcceuilFormateurComponent},
  {path: 'acceuil-apprenant', component:AcceuilApprenantComponent},
  {path: 'liste-formateur', component:ListeFormateursComponent},
  {path: '', redirectTo: 'connexion', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
