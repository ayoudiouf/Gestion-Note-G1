import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email: string = "";
  password: string = "";

  users = [
    {
      id: 1,
      nomComplet: "admin",
      email: "admin@gmail.com",
      password: "passer",
      role: "admin",
      etat: "actif",
      image: "www.exmple.com"
    },
    {
      id: 2,
      nomComplet: "apprenant",
      email: "apprenant@gmail.com",
      password: "passer",
      role: "apprenant",
      etat: "actif",
      image: "www.exmple.com",
      note : [{}]
    },
    {
      id: 3,
      nomComplet: "formateur",
      email: "formateur@gmail.com",
      password: "passer",
      role: "formateur",
      etat: "actif",
      image: "www.exmple.com",
    },
    {
      id: 4,
      nomComplet: "formateur2",
      email: "formateur2@gmail.com",
      password: "passer",
      role: "formateur",
      etat: "actif",
      image: "www.exmple.com",
    }
  ]

  // classes = [{
  //   id: 1,
  //   nom: "Seconde L",
  //   apprenants: [
  //     {
  //       id: 2,
  //       nomComplet: "apprenant",
  //       email: "apprenant@gmail.com",
  //       password: "passer",
  //       role: "apprenant",
  //       etat: "actif",
  //       image: "www.exmple.com",
  //       classe: "Seconde S"
  //     },
  //   ]
  // }]

  // matiere = [
  //   {
  //     id: 1,
  //     nom: "svt",
  //     evaluation: [{
  //       id: 1,
  //       type: "devoir",
  //       etat: "En cours",
  //       classe: 1
  //     }],
  //   }
  // ]

  // formateur = [
  //   {
  //     nomComplet: "formateur",
  //     email: "formateur@gmail.com",
  //     password: "passer",
  //     role: "formateur",
  //     etat: "actif",
  //     image: "www.exmple.com",
  //     matieres: ["svt", "pc"],
  //   }
  // ]

  //variable qui nous permet de recuperer un objet a traver le mail saisie dans notre tableau users
  findUser: any;

  //variable qui nous permettra de recuperer notre local storage
  db: any;

  constructor(private route: Router) { }
  ngOnInit(): void {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(this.users));
    }
  }

  showMessage(icon: any, message: any) {
    Swal.fire({
      icon: icon,
      title: message
    });
  }


  login() {
    //Si les champs sont vide on affiche une message d'erreur❌
    // Sinon on essaye de trouver le user correspondant✅
    if (this.email == "" || this.password == "") {
      this.showMessage('error', 'Email ou mot de passe incorecte');
    } else {
      //recuperer notre local storage
      this.db = JSON.parse(localStorage.getItem('users') || '[]');

      //On essaye de recuperer le user qui a le mail siasie
      this.findUser = this.db.find((element: any) => element.email == this.email);

      //on verifie si notre variable à trouver un objet correspondant
      if (this.findUser) {
        //On verifie si le mot de passe est bon
        if (this.findUser.password == this.password) {
          if (this.findUser.role === "admin") {
            this.route.navigate(['/', 'acceuil-admin']);
            this.showMessage('success', 'Connexion avec succées');
          } else if (this.findUser.role === "apprenant") {
            this.route.navigate(['/', 'acceuil-apprenant']);
            this.showMessage('success', 'Connexion avec succées');
          } else if (this.findUser.role === "formateur") {
            this.route.navigate(['/', 'acceuil-formateur']);
            this.showMessage('success', 'Connexion avec succées');
          }

          //enregistrer l'utilisateur connecter
          localStorage.setItem('currentUser', JSON.stringify(this.findUser.id));

          //vider les champs
          this.email = "";
          this.password = "";
        } else {
          this.showMessage('error', 'Email ou mot de passe incorecte');
        }
      } else {
        this.showMessage('error', 'Email ou mot de passe incorecte');
      }
    }
  }

}
