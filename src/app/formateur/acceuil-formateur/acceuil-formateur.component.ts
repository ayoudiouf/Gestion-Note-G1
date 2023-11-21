import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil-formateur',
  templateUrl: './acceuil-formateur.component.html',
  styleUrls: ['./acceuil-formateur.component.css']
})
export class AcceuilFormateurComponent implements OnInit {

  classes = [
    {
      id: 1,
      nom: "Seconde L",
      apprenants: [
        {
          id: 2,
          nomComplet: "apprenant",
          email: "apprenant@gmail.com",
          password: "passer",
          role: "apprenant",
          etat: "actif",
          image: "www.exmple.com",
          note : []
        },
      ]
    },
    {
      id: 2,
      nom: "Seconde S",
      apprenants: []
    }
  ]

  matieres = [
    {
      id: 1,
      nom: "francais",
      formateur_id: 3,
      evaluation: [],
    },
    {
      id: 2,
      nom: "Anglais",
      formateur_id: 3,
      evaluation: [],
    },
    {
      id: 3,
      nom: "Math",
      formateur_id: 4,
      evaluation: [],
    },

  ]

  formateurs = [
    {
      id: 3,
      nomComplet: "formateur",
      email: "formateur@gmail.com",
      password: "passer",
      role: "formateur",
      etat: "actif",
      image: "www.exmple.com"
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


  ngOnInit(): void {
    if (!localStorage.getItem("classes")) {
      localStorage.setItem("classes", JSON.stringify(this.classes));
    }
    if (!localStorage.getItem("matieres")) {
      localStorage.setItem("matieres", JSON.stringify(this.matieres));
    }
    if (!localStorage.getItem("formateurs")) {
      localStorage.setItem("formateurs", JSON.stringify(this.formateurs));
    }
  }


}
