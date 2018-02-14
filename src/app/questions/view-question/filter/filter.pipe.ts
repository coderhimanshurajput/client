import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRawHtml'
})
export class FilterPipe implements PipeTransform {

  transform(people: any): any {

  	return String(people).replace(/<[^>]+>/gm, '');

  }

}