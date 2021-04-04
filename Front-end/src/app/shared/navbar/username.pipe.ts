import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    
    if(value.length === 0 ){
      return 0
    }
    if(value == "" ){
      return 0
    }

    return value.filter(function(search){
      return search.username.toLowerCase().indexOf(searchText) > -1
    });
  }

}
