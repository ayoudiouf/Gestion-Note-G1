import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentification/auth/auth.component';
import { AcceuilAdminComponent } from './admin/acceuil-admin/acceuil-admin.component';
import { AcceuilFormateurComponent } from './formateur/acceuil-formateur/acceuil-formateur.component';
import { AcceuilApprenantComponent } from './apprenant/acceuil-apprenant/acceuil-apprenant.component';
import { AjouterEvaluationComponent } from './formateur/gestionEvaluation/ajouter-evaluation/ajouter-evaluation.component';
import { ListerEvaluationComponent } from './formateur/gestionEvaluation/lister-evaluation/lister-evaluation.component';
import { ModifierEvaluationComponent } from './formateur/gestionEvaluation/modifier-evaluation/modifier-evaluation.component';
import { GestionApprenantComponent } from './admin/gestion-apprenant/gestion-apprenant.component';
import { GestionClasseComponent } from './admin/gestion-classe/gestion-classe.component';
import { GestionMatiereComponent } from './admin/gestion-matiere/gestion-matiere.component';
import { GestionFormateurComponent } from './admin/gestion-formateur/gestion-formateur.component';
import { GestionNoteComponent } from './admin/gestion-note/gestion-note.component';

const routes: Routes = [
  {path: 'connexion', component:AuthComponent},
  {path: 'acceuil-admin', component:AcceuilAdminComponent},
  {path: 'gestion-classe', component:GestionClasseComponent},
  {path: 'gestion-matiere', component:GestionMatiereComponent},
  {path: 'gestion-formateur', component:GestionFormateurComponent},
  {path: 'gestion-apprenant', component:GestionApprenantComponent},
  {path: 'gestion-note', component:GestionNoteComponent},
  {path: 'acceuil-formateur', component:AcceuilFormateurComponent},
  {path: 'acceuil-apprenant', component:AcceuilApprenantComponent},
  {path: 'ajouter-evaluation', component:AjouterEvaluationComponent},
  {path: 'lister-evaluation', component:ListerEvaluationComponent},
  {path: 'modifier-evaluation', component:ModifierEvaluationComponent},



  {path: '', redirectTo: 'connexion', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
