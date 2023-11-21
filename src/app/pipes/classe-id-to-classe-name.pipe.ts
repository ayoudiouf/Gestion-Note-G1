import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classeIdToClasseName'
})
export class ClasseIdToClasseNamePipe implements PipeTransform {

  transform(classe_id: number, classes: any[]): string {
    const classe = classes.find(classe => classe.id === classe_id);
    return classe ? classe.nom : 'N/A';
  }

}
