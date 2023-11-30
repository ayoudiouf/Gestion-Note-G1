import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-apprenant',
  templateUrl: './gestion-apprenant.component.html',
  styleUrls: ['./gestion-apprenant.component.css']
})
export class GestionApprenantComponent implements OnInit {
  users: any;
  classes: any;
  apprenants: any;
  apprenant: any;

  currentApprenant: any;

  nomCompletApprenant: string = "";
  emailApprenant: string = "";

  selectClasseValue?: number;


  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    this.classes = JSON.parse(localStorage.getItem('classes') || '[]');

    this.apprenants = this.users.filter((user: any) => user.role === 'apprenant');

  }

  showMessage(icon: any, message: any) {
    Swal.fire({
      icon: icon,
      title: message
    });
  }

  clearInput() {

  }

  addApprenant() {
    if (this.nomCompletApprenant == "" || this.emailApprenant == "" || this.selectClasseValue == undefined) {
      this.showMessage('error', 'Veuillez remplir tout les champs');
    } else {
      this.apprenant = {
        id: this.users.length + 1,
        nomComplet: this.nomCompletApprenant,
        email: this.emailApprenant,
        password: "passer",
        role: "apprenant",
        etat: "actif",
        image: "www.exmple.com",
        classe_id: this.selectClasseValue,
        note: []
      }

      this.users.push(this.apprenant);

      this.classes.forEach((element: any) => {
        if (element.id === this.selectClasseValue) {
          element.apprenants.push(this.apprenant);
        }
      });

      localStorage.setItem('users', JSON.stringify(this.users));
      localStorage.setItem('classes', JSON.stringify(this.classes));

      this.apprenants = this.users.filter((user: any) => user.role === 'apprenant');

      this.nomCompletApprenant = "";
      this.emailApprenant = "";
      this.selectClasseValue = undefined;
    }


  }

  detail(apprenantId: number) {
    // Find the apprenant with the given ID
    const apprenant = this.apprenants.find((find: { id: number; }) => find.id === apprenantId);
  }

  desactiveApprenant(id: any) {
    const currentUser = this.users.find((elt: any) => elt.id === id)
    currentUser.etat = currentUser.etat === 'actif' ? 'inactif' : 'actif';
    this.updateUserEtat(currentUser);
  }

  updateUserEtat(user: any) {
    const index = this.users.findIndex((u: any) => u.id === user.id);
    if (index !== -1) {
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
          this.showMessage('success', 'Etat modifier avec succès');
          this.users[index] = user;
          localStorage.setItem('users', JSON.stringify(this.users));

        }
      })
      };
  }

  apprenantToUpdate(id?: number) {
    this.currentApprenant = this.users.find((elt: any) => elt.id === id);
    this.nomCompletApprenant =this.currentApprenant.nomComplet;
    this.emailApprenant = this.currentApprenant.email;
    this.selectClasseValue = this.currentApprenant.classe_id
  }

  updateApprenant() {
    if (this.nomCompletApprenant == "" || this.emailApprenant == "" || this.selectClasseValue == undefined) {
      this.showMessage('error', 'Veuillez remplir tout les champs');
    } else {
      this.currentApprenant.nomComplet = this.nomCompletApprenant;
      this.currentApprenant.email = this.emailApprenant;
      this.currentApprenant.classe_id = this.selectClasseValue;

      localStorage.setItem('users', JSON.stringify(this.users));
      this.showMessage('success', 'apprenant modifier avec succées');

    }
  }




}
