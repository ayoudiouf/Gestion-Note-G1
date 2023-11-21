import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-matiere',
  templateUrl: './gestion-matiere.component.html',
  styleUrls: ['./gestion-matiere.component.css']
})
export class GestionMatiereComponent {
  nomMatiere: string = "";

  matiere: any;

  matieres: any;

  currentMatiere: any;

  users: any;

  formateurs: any;

  classes: any;

  selectFormateurValue: any;

  selectClassValue: any;



  ngOnInit(): void {
    this.matieres = JSON.parse(localStorage.getItem('matieres') || '[]');

    this.users = JSON.parse(localStorage.getItem('users') || '[]');

    this.formateurs = this.users.filter((user: any) => user.role === 'formateur');

    this.classes = JSON.parse(localStorage.getItem('classes') || '[]');
    // console.log(this.matieres)
  }

  showMessage(icon: any, message: any) {
    Swal.fire({
      icon: icon,
      title: message
    });
  }

  clearInput() {

  }

  addMatiere() {
    if (this.nomMatiere == "" || this.selectClassValue == undefined || this.selectFormateurValue == undefined) {
      this.showMessage('error', 'Veuillez remplir tout les champs');
    } else {
      this.matiere = {
        id: this.matieres.length + 1,
        nom: this.nomMatiere,
        formateur_id: this.selectFormateurValue,
        classe_id: this.selectClassValue,
        evaluation: [],
      }

      this.matieres.push(this.matiere);

      localStorage.setItem('matieres', JSON.stringify(this.matieres));

      this.showMessage('success', 'matière ajouté avec succées');

      this.nomMatiere = "";
      this.selectClassValue = undefined;
      this.selectFormateurValue = undefined;

    }

  }

  ClasseToUpdate(id?: number) {
    this.currentMatiere = this.matieres.find((elt: any) => elt.id === id);
    this.nomMatiere = this.currentMatiere.nom
    this.selectFormateurValue = this.currentMatiere.formateur_id;
    this.selectClassValue = this.currentMatiere.classe_id;
  }

  updateMatiere() {
    if (this.nomMatiere == "" || this.selectClassValue == undefined || this.selectFormateurValue == undefined) {
      this.showMessage('error', 'Veuillez remplir tout les champs');
    } else {
      this.currentMatiere.nom = this.nomMatiere;
      this.currentMatiere.formateur_id = this.selectFormateurValue;
      this.currentMatiere.classe_id = this.selectClassValue;

      localStorage.setItem('matieres', JSON.stringify(this.matieres));
      this.showMessage('success', 'classe ajouté avec succées');

    }
  }

  removeClasse(id?: number) {
    Swal.fire({
      title: "Etes-vous sûr?",
      text: "de vouloir supprimer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui je veus supprimer"
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.matieres.findIndex((matiere: any) => matiere.id === id);

        if (index !== -1) {
          // Supprimer la classe de la liste
          this.matieres.splice(index, 1);

          // Mettre à jour le local storage
          localStorage.setItem('matieres', JSON.stringify(this.matieres));

          this.showMessage('success', 'Classe supprimée avec succès');
        } else {
          this.showMessage('error', 'Classe non trouvée');
        }
      }
    });
  }
}
