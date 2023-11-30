import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-note',
  templateUrl: './gestion-note.component.html',
  styleUrls: ['./gestion-note.component.css']
})
export class GestionNoteComponent implements OnInit{
notes: any;
noteToUpdate(arg0: any) {
throw new Error('Method not implemented.');
}
  ngOnInit(): void {

  }

}

