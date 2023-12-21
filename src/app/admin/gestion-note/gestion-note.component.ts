import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-note',
  templateUrl: './gestion-note.component.html',
  styleUrls: ['./gestion-note.component.css']
})
export class GestionNoteComponent implements OnInit{
  users: any;
  classes: any;

  notes: any;
  currentUser:any;

  nomCompletApprenant: string = "";
  classNote: string = "";
  matiereNote: string = "";
  notesNote: string = "";

  note = [
    { image: 'image1.jpg', nomComplet: 'John Doe', email: 'johndoe@example.com', etat: 'actif' },
    { image: 'image2.jpg', nomComplet: 'Jane Doe', email: 'janedoe@example.com', etat: 'inactif' },
    { image: 'image3.jpg', nomComplet: 'Bob Smith', email: 'bobsmith@example.com', etat: 'actif' }
  ];

  detail(noteId: number) {
    // Find the note with the given ID
    const note = this.notes.find((find: { id: number; }) => find.id === noteId);

    // Display the note details in a dialog or separate page
    // alert(`Nom complet: ${note.nomComplet}\nEmail: ${note.email}\nEtat du compte: ${note.etat}`);
  }

  ngOnInit(): void {
     this.users = JSON.parse(localStorage.getItem('users') || '[]');
    this.classes = JSON.parse(localStorage.getItem('classes') || '[]');

    this.notes = this.users.filter((user: any) => user.role === 'note');
  }

  showMessage(icon: any, message: any) {
    Swal.fire({
      icon: icon,
      title: message
    });
  }

  clearInput(){

  }

  addNote(){

    if (this.nomCompletApprenant == "" || this.notesNote == "" || this.classNote == "" || this.matiereNote == ""){
      this.showMessage('error', 'Veuillez remplir tout les champs');
    }else{

      const note = {
        id: this.users.length + 1,
        nomComplet: this.nomCompletApprenant,
        class: this.classNote,
        matiere: this.matiereNote,
        note: this.notesNote,
        password: "passer",
        role: "note",
        etat: "actif",
        image: "www.exmple.com"
      }

      this.users.push(note);
      localStorage.setItem('users', JSON.stringify(this.users));

      this.notes = this.users.filter((user: any) => user.role === 'note');



    }
    const note = {
      id: 3,
      nomComplet: "note",
      email: "note@gmail.com",
      class: "classNote",
      matiere: "matiereNote",
      note: "noteNote",
      password: "passer",
      role: "note",
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

  desactiveNote(id?: number){
    this.currentUser = this.users.find((elt: any) => elt.id === id)
    this.currentUser.etat = this.currentUser.etat === 'actif' ? 'inactif' : 'actif';
    this.updateUserEtat(this.currentUser);
  }

  noteToUpdate(id?: number) {
    this.currentUser = this.users.find((elt: any) => elt.id === id);
    this.nomCompletApprenant =this.currentUser.nomComplet;
    this.notesNote = this.currentUser.email;
  }

  updateApprenant(){
    if (this.nomCompletApprenant == "" || this.notesNote == "" || this.classNote == "" || this.matiereNote == "") {
      this.showMessage('error', 'Veuillez remplir tout les champs');
    } else {
      this.currentUser.nomComplet = this.nomCompletApprenant;
      this.currentUser.email = this.notesNote;

      localStorage.setItem('users', JSON.stringify(this.users));
      this.showMessage('success', 'apprenant modifier avec succées');

    }
  }


}

