import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-classe',
  templateUrl: './gestion-classe.component.html',
  styleUrls: ['./gestion-classe.component.css']
})
export class GestionClasseComponent implements OnInit {

  // classes = [
  //   {
  //     id: 1,
  //     nom: "Seconde L",
  //     etat: 'actif',
  //     apprenants: [
  //       {
  //         id: 2,
  //         nomComplet: "apprenant",
  //         email: "apprenant@gmail.com",
  //         password: "passer",
  //         role: "apprenant",
  //         etat: "actif",
  //         image: "www.exmple.com",
  //         note : []
  //       },
  //     ]
  //   }
  // ];

  nomClass: string = "";

  classe: any;

  classes: any;

  currentClasse: any;

  ngOnInit(): void {
    this.classes = JSON.parse(localStorage.getItem('classes') || '[]');

  }

  showMessage(icon: any, message: any) {
    Swal.fire({
      icon: icon,
      title: message
    });
  }

  addClasse() {
    if (this.nomClass == "") {
      this.showMessage('error', 'Veuillez remplir tout les champs');
    } else {
      this.classe = {
        id: this.classes.length + 1,
        nom: this.nomClass,
        annescolaire: "2023-2024",
        apprenants: []
      }

      this.classes.push(this.classe);
      localStorage.setItem('classes', JSON.stringify(this.classes));
      this.showMessage('success', 'classe ajouté avec succées');

      this.nomClass = "";
    }
  }

  clearInput() {
    this.nomClass = "";
  }

  ClasseToUpdate(id?: number) {
    this.currentClasse = this.classes.find((elt: any) => elt.id === id);
    this.nomClass = this.currentClasse.nom;
  }

  updateClasse() {
    if (this.nomClass == "") {
      this.showMessage('error', 'Veuillez remplir tout les champs');
    } else {
      this.currentClasse.nom = this.nomClass;

      localStorage.setItem('classes', JSON.stringify(this.classes));
      this.showMessage('success', 'classe ajouté avec succées');

      this.nomClass = "";
    }
  }

  removeClasse(id?: number) {

    Swal.fire({
      title: "etes-vous sûr?",
      text: "de vouloir supprimer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui je veus supprimer"
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.classes.findIndex((classe: any) => classe.id === id);

        if (index !== -1) {
          // Supprimer la classe de la liste
          this.classes.splice(index, 1);

          // Mettre à jour le local storage
          localStorage.setItem('classes', JSON.stringify(this.classes));

          this.showMessage('success', 'Classe supprimée avec succès');
        } else {
          this.showMessage('error', 'Classe non trouvée');
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }



}
