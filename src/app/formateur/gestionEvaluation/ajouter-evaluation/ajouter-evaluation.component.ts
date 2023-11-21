import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-evaluation',
  templateUrl: './ajouter-evaluation.component.html',
  styleUrls: ['./ajouter-evaluation.component.css']
})
export class AjouterEvaluationComponent implements OnInit {

  // matieres = [
  //   {
  //     id: 1,
  //     nom: "francais",
  //     formateurs_id: 3,
  //     classe_id: 1,
  //     evaluation: [
  //       {
  //         id: 1,
  //         type: "devoir",
  //         etat: "En cours",
  //         date: "30/11/2023",
  //         semestre: 1,
  //         annescollaire: 2023 - 2024
  //       }
  //     ],
  //   }


  // ]

  allClasses: any;
  allMatieres: any;
  allMatiereByIdProf: any;
  currentUser_id: any;
  allClassesId: any;
  getClassObj: any;

  // nos-variable-2wayDataBinding
  selectTypeValue: string = "";
  selectClasseValue: string = "";
  selectMatiereValue: string = "";
  selectSemestreValue: string = "";
  startDate: any;

  constructor(private route: Router) { }

  ngOnInit(): void {

    this.allClasses = JSON.parse(localStorage.getItem('classes') || '[]');
    this.allMatieres = JSON.parse(localStorage.getItem('matieres') || '[]');
    this.currentUser_id = JSON.parse(localStorage.getItem('currentUser') || '[]');

    //Initiliser notre varible de type any en tableau
    this.allMatiereByIdProf = []
    //parcourir le tableaux matiere et recuperer les matiere dont l' id du formateur est egal a la current user
    this.allMatieres.forEach((element: any) => {
      if (element.formateur_id === this.currentUser_id) {
        this.allMatiereByIdProf.push(element);
      }
    })
    //Initiliser notre varible de type any en tableau
    this.allClassesId = []
    //parcourir le tableaux matiere et recuperer les matiere dont l' id du formateur est egal a la current user puis on ajoute l' id dans notre tableua allclassesId
    this.allMatieres.forEach((element: any) => {
      if (element.formateur_id === this.currentUser_id) {
        this.allClassesId.push(element.classe);
      }
    });

    this.getClassObj = []
    //on parcour notre allclassesId et a chaque tour de boucle et recherche l' id dans le tableux classe recuperer l'objet s'il le trouve et l'ajouter dans le tableau getClassObj
    for (let index = 1; index < this.allClassesId.length; index++) {
      this.getClassObj.push(this.allClasses.find((elt: any) => elt.id === index));

      console.log(this.allClasses)

    }

  }

  showMessage(icon: any, message: any) {
    Swal.fire({
      icon: icon,
      title: message
    });
  }

  addEvaluation() {
    if (this.selectTypeValue == "" || this.selectClasseValue == "" || this.selectMatiereValue == "" || this.selectSemestreValue == "" || this.startDate == undefined) {
      this.showMessage('error', 'Veuillez remplir tout les champs');
    } else {
      let foundMatiere = this.allMatieres.find(((elt: any) => elt.id === this.selectMatiereValue));

      let ev = {
        id: foundMatiere.evaluation.length + 1,
        type: this.selectTypeValue,
        etat: "En cours",
        date: this.startDate,
        classe_id: this.selectClasseValue,
        semestre: this.selectSemestreValue,
        annescollaire: "2023-2024"
      }

      foundMatiere.evaluation.push(ev)
      localStorage.setItem("matieres", JSON.stringify(this.allMatieres));

      this.showMessage('success', 'Evaluation ajouté avec succées');

      this.selectTypeValue = "";
      this.selectClasseValue = "";
      this.selectMatiereValue = "";
      this.selectSemestreValue = "";
      this.startDate = undefined;

      this.route.navigate(['/', 'lister-evaluation'])

    }
  }





}
