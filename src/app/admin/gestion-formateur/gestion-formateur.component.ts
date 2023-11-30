import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-formateur',
  templateUrl: './gestion-formateur.component.html',
  styleUrls: ['./gestion-formateur.component.css']
})
export class GestionFormateurComponent implements OnInit{
  users: any;
  classes: any;

  formateurs: any;
  currentUser:any;

  nomCompletFormateur: string = "";
  emailFormateur: string = "";

  formateur = [
    { image: 'image1.jpg', nomComplet: 'John Doe', email: 'johndoe@example.com', etat: 'actif' },
    { image: 'image2.jpg', nomComplet: 'Jane Doe', email: 'janedoe@example.com', etat: 'inactif' },
    { image: 'image3.jpg', nomComplet: 'Bob Smith', email: 'bobsmith@example.com', etat: 'actif' }
  ];

  detail(formateurId: number) {
    // Find the formateur with the given ID
    const formateur = this.formateurs.find((find: { id: number; }) => find.id === formateurId);

    // Display the formateur details in a dialog or separate page
    // alert(`Nom complet: ${formateur.nomComplet}\nEmail: ${formateur.email}\nEtat du compte: ${formateur.etat}`);
  }

  ngOnInit(): void {
     this.users = JSON.parse(localStorage.getItem('users') || '[]');
    this.classes = JSON.parse(localStorage.getItem('classes') || '[]');

    this.formateurs = this.users.filter((user: any) => user.role === 'formateur');
  }

  showMessage(icon: any, message: any) {
    Swal.fire({
      icon: icon,
      title: message
    });
  }

  clearInput(){

  }

  addFormateur(){

    if (this.nomCompletFormateur == "" || this.emailFormateur == "" ){
      this.showMessage('error', 'Veuillez remplir tout les champs');
    }else{

      const formateur = {
        id: this.users.length + 1,
        nomComplet: this.nomCompletFormateur,
        email: this.emailFormateur,
        password: "passer",
        role: "formateur",
        etat: "actif",
        image: "www.exmple.com"
      }

      this.users.push(formateur);
      localStorage.setItem('users', JSON.stringify(this.users));

      this.formateurs = this.users.filter((user: any) => user.role === 'formateur');



    }
    const formateur = {
      id: 3,
      nomComplet: "formateur",
      email: "formateur@gmail.com",
      password: "passer",
      role: "formateur",
      etat: "actif",
      image: "www.exmple.com"
    }

  }

  // detail(id?: number){

  // }

  updateUserEtat(user: any){
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

  desactiveFormateur(id?: number){
    this.currentUser = this.users.find((elt: any) => elt.id === id)
    this.currentUser.etat = this.currentUser.etat === 'actif' ? 'inactif' : 'actif';
    this.updateUserEtat(this.currentUser);
  }

  fomateurToUpdate(id?: number) {
    this.currentUser = this.users.find((elt: any) => elt.id === id);
    this.nomCompletFormateur =this.currentUser.nomComplet;
    this.emailFormateur = this.currentUser.email;
  }

  updateApprenant(){
    if (this.nomCompletFormateur == "" || this.emailFormateur == "") {
      this.showMessage('error', 'Veuillez remplir tout les champs');
    } else {
      this.currentUser.nomComplet = this.nomCompletFormateur;
      this.currentUser.email = this.emailFormateur;

      localStorage.setItem('users', JSON.stringify(this.users));
      this.showMessage('success', 'apprenant modifier avec succées');

    }
  }





}
