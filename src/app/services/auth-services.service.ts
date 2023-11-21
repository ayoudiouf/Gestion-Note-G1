import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private router: Router) {}

  login(email: string, password: string): void {
    if (email === "" || password === "") {
      this.showMessage('error', 'Email ou mot de passe incorrect');
    } else {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const findUser = users.find((user: any) => user.email === email);

      if (findUser && findUser.password === password) {
        this.handleLoginSuccess(findUser);
      } else {
        this.showMessage('error', 'Email ou mot de passe incorrect');
      }
    }
  }

  private handleLoginSuccess(user: any): void {
    if (user.role === "admin") {
      this.router.navigate(['/', 'acceuil-admin']);
    } else if (user.role === "apprenant") {
      this.router.navigate(['/', 'acceuil-apprenant']);
    } else if (user.role === "formateur") {
      this.router.navigate(['/', 'acceuil-formateur']);
    }

    localStorage.setItem('currentUser', JSON.stringify(user.id));
    this.showMessage('success', 'Connexion réussie');
  }

  private showMessage(icon: any, message: any) {
    Swal.fire({
      icon: icon,
      title: message
    });
  }
}
