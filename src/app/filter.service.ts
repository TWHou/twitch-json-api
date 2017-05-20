import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {
  search(array, query: string) {

    if (!query) {
      return array;
    } else if (array) {
      let filteredArray = array.filter(item => {
        if (item.state === query) {
          return item;
        }
      });
      return filteredArray;
    }
  }

}