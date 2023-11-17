import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcceuilFormateurComponent } from 'src/app/formateur/acceuil-formateur/acceuil-formateur.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-liste-formateurs',
  templateUrl: './liste-formateurs.component.html',
  styleUrls: ['./liste-formateurs.component.css']
})
export class ListeFormateursComponent {





  // attributs
  email: string = "";
  prenom: string = "";
  nom: string = "";
  telephone: string = "";
  matiere: string = "";
  description: string = "";
  photoURL: string = "";



  tabUsers: any;
  userFound: any;
  //  formateurUserFound: any;

  // Formateur trouvé
  formateurUserFound: any;

  // choix pour afficher soit la corbeille soit la liste des formateurs
  choice: boolean = true;
  found: boolean = false;

  //valeur du filter qui correspond a celui du champs recherche
  filterValue = '';

  //les element trouver
  filteredElement: any;
  //
  idFormateurUser: number =0;
  formateur: any;
  tabFormateur: any;
  tabUser: any;


  // Constructeur de la classe
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // On essaie de récupérer l'ID qui se trouve dans l'URL
    this.idFormateurUser = JSON.parse(localStorage.getItem("currentUsers") || '[]');
    // console.log(this.idFormateurUser)

    this.tabFormateur = JSON.parse(localStorage.getItem("formateurs") || '[]');
    this.tabUsers = JSON.parse(localStorage.getItem("users") || '[]');

    // this.tabUsers = JSON.parse(localStorage.getItem("users") || '[]');
    // console.log(this.tabFormateur)
    // console.log(this.tabUsers[this.idFormateurUser-1]);

    // this.userFound = this.tabUsers.find((element: any) => element.id == this.idFormateurUser);
    // this.userFound = this.tabUsers[this.idFormateurUser-1];
    this.formateurUserFound = this.userFound;
    console.log(this.formateurUserFound);

    //assigner la liste des formateur a notre variable element filtrer
    this.filteredElement = this.formateurUserFound;
  }

  // Methode de recherche automatique
  onSearch() {
    // Recherche se fait selon le nom ou le prenom
    this.filteredElement = this.formateurUserFound.filter(
      (elt: any) => (elt?.nomFormateur.toLowerCase().includes(this.filterValue.toLowerCase())) || elt?.prenomFormateur.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }


  // Methode pour ajouter un formateur
  ajouter() {
    // On récupere l'identifiant du derneire elemnt du tableau
    if(this.tabFormateur.length){
      this.idFormateurUser = this.tabFormateur[this.tabFormateur.length - 1].id;
    }

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (this.nom == "" || this.prenom == "" || this.email == "" || this.description == "" || this.telephone == "" || this.matiere == "" || this.photoURL == "") {
      this.verifInfos("Erreur!", "Veuillez remplir les champs", "error");
    }else if(!this.email.match(emailPattern)) {
      this.verifInfos("Erreur!", "Email invalide", "error");
    }else {
      // On récupère le dernier element du tableau
      let formateurUser = {
        id: this.tabUsers.length + 1,
        nomComplet: `${this.prenom} ${this.nom}`  ,
        email: this.email,
        // matiere.this.matiere,
        password: "passer",
        role: "formateur",
        etat: "actif",
        image: "www.exmple.com"
      }

      let emailFormateurFound = this.tabFormateur.find((element: any) => element.email == this.email);
      if (emailFormateurFound) {
        this.verifInfos("Impossible", "Ce formateur existe déjà", "error")
      }else {
        // console.log("On peut  ajouter")
        this.tabFormateur.push(formateurUser);
        this.tabUsers.push(formateurUser);

        localStorage.setItem("formateurs", JSON.stringify(this.tabFormateur));
        localStorage.setItem("users", JSON.stringify(this.tabUsers));

        this.verifInfos("Felicitation", "Formateur créé avec succes", "success");
        this.viderChamps();
      }
    }

  }

  // Fonction pour afficher un sweetalert
  verifInfos(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    })
  }

  // Fonction pour vider les champs
  viderChamps() {
    this.email = "";
    this.prenom = "";
    this.nom = "";
    this.telephone = "";
    this.matiere = "";
    this.description = "";
    this.photoURL = "";
  }

  // ajouter un formateur
  viderliste(idFormateur: any) {
    Swal.fire({
      title: "Voulez vous vraiment ajouter ce formateur?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: `Annuler`,
      confirmButtonColor: "#4aa3a2",
      cancelButtonColor: "#F9968B",
      confirmButtonText: "Oui, ajouter!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userFound.Formateurs[idFormateur - 1].etatFormateur = 0;
        localStorage.setItem("formateurUsers", JSON.stringify(this.tabUsers));

        this.verifInfos("Ajouter!", "", "success");
      }
    });

  }

  // Modifier un formateur
  // Charger information
  chargeInfoModif(formateurUserFound: any) {
    // L'objet formateur trouvé
    this.formateurUserFound = formateurUserFound;

    // Chargement des informations
    this.nom = formateurUserFound.nomFormateur;
    this.prenom = formateurUserFound.prenomFormateur;
    this.email = formateurUserFound.emailFormateur;
    this.telephone = formateurUserFound.telephoneFormateur;
    this.description = formateurUserFound.descriptionFormateur;
    this.photoURL = formateurUserFound.photoFormateur;
  }

  // Modifier un formateur
  modifier() {

    console.log("Avant modification");
    console.log(this.formateurUserFound);

    this.formateurUserFound.nomFormateur = this.nom;
    this.formateurUserFound.prenomFormateur = this.prenom;
    this.formateurUserFound.emailFormateur = this.email;
    this.formateurUserFound.photoFormateur = this.photoURL;
    this.formateurUserFound.telephoneFormateur = this.telephone;
    this.formateurUserFound.descriptionFormateur = this.description;
    this.formateurUserFound.updatedAt = new Date();

    console.log("Apres modification");
    console.log(this.formateurUserFound);

    localStorage.setItem("formateurUsers", JSON.stringify(this.tabUsers));
    // this.verifInfos("Félicitation!", "Formateur modifier avec succes", "success");
    // window.location.reload();
    this.viderChamps();

    Swal.fire({
      title: "Felicitation!",
      text: "Formateur modifier avec succes",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  }

  // Methode pour choisir le formulaire
  listChoice() {
    this.choice = !this.choice;
  }


}
