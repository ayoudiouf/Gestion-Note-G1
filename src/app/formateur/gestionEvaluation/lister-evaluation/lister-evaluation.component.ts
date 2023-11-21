import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lister-evaluation',
  templateUrl: './lister-evaluation.component.html',
  styleUrls: ['./lister-evaluation.component.css']
})
export class ListerEvaluationComponent implements OnInit{

  allMatieres: any;
  allMatiereByIdProf: any;
  allClasses:any;
  currentUser_id: any;
  evaluations: any;

  regroupEvaluationByProf: any;
  listeEvaluationByMatiere: any;
  selectMatiereValue=0;


  ngOnInit(): void {
    this.allMatieres = JSON.parse(localStorage.getItem('matieres') || '[]');
    this.currentUser_id = JSON.parse(localStorage.getItem('currentUser') || '[]');
    this.allClasses = JSON.parse(localStorage.getItem('currentUser') || '[]');

     //Initiliser notre varible de type any en tableau
     this.allMatiereByIdProf = []
     //parcourir le tableaux matiere et recuperer les matiere dont l' id du formateur est egal a la current user
     this.allMatieres.forEach((element: any) => {
       if (element.formateur_id === this.currentUser_id) {
         this.allMatiereByIdProf.push(element);
       }
     })

     this.regroupEvaluationByProf = []

     for (let index = 0; index < this.allMatiereByIdProf.length; index++) {
      this.allMatiereByIdProf[index].evaluation.forEach((element: any) => {
        this.regroupEvaluationByProf.push(element)
      });

     }





     console.log(this.regroupEvaluationByProf)


  }

  selectMatiereValueFn(){
    this.listeEvaluationByMatiere = [];

     this.regroupEvaluationByProf.forEach((element:any) => {
      console.log("selectMatiereValue:", this.selectMatiereValue);
      if (element.id === this.selectMatiereValue) {
        this.listeEvaluationByMatiere.push(element);

        console.log(this.regroupEvaluationByProf)
      }else{
      }
     });

  }


  changeEtat(){

  }


  // onSelectMatiereChange(event: any) {
  //   // La valeur sélectionnée est maintenant l'ID de la matière
  //   this.selectMatiereValue = event.target.value;
  //   console.log('Nouvel ID de la matière sélectionnée :', this.selectMatiereValue);

  // }





}


