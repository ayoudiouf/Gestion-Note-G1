import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil-admin',
  templateUrl: './acceuil-admin.component.html',
  styleUrls: ['./acceuil-admin.component.css']
})
export class AcceuilAdminComponent implements OnInit{

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
          note : [{}]
        },
      ]
    }
  ]

  matieres = [
    {
      id: 1,
      nom: "francais",
      formateur_id: 3,
      classe_id: 1,
      evaluation: [
        {
          id: 1,
          type: "devoir",
          etat: "En cours",
          date: "30/11/2023",
          semestre: 1,
          annescollaire: 2023 - 2024
        }
      ],
    },
    {
      id: 2,
      nom: "Anglais",
      formateur_id: 3,
      classe: 1,
      evaluation: [
        {
          id: 1,
          type: "devoir",
          etat: "En cours",
          date: "30/11/2023",
          semestre: 1,
          annescollaire: 2023 - 2024
        }
      ],
    }
  ]

  formateurs = [
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
