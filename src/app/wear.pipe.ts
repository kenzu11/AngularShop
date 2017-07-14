import { Pipe, PipeTransform } from '@angular/core';

import { Wear } from './wear';

@Pipe({
  name: 'wearCategory'
})
export class WearPipe implements PipeTransform {

    transform(items: Wear[], args: string): any {
//        return items.filter(item => item.cate === args );
      return items;  
    }
    
 
}
