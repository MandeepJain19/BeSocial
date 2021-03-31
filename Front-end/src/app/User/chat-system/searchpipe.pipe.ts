import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if(value.length === 0){
      return value
    }
    return value.filter(function(search){
      return search.username.toLowerCase().indexOf(searchText) > -1
    });
  }

}
