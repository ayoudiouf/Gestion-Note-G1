import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userIdToUsername'
})
export class UserIdToUsernamePipe implements PipeTransform {

  transform(formateur_id: number, users: any[]): string {
    const formateur = users.find(user => user.id === formateur_id);
    // console.log(formateur);
    return formateur ? formateur.nomComplet : 'N/A';
  }

}
