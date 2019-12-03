import {Pipe, PipeTransform} from '@angular/core';
import {Item} from './item';


@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {

  transform(value: Item[], term: string): Item[] {
    term = term ? term.toLocaleLowerCase() : null;
    return term ? value.filter((item: Item) =>
      item.name.toLocaleLowerCase().indexOf(term) !== -1) : value;
  }
}
