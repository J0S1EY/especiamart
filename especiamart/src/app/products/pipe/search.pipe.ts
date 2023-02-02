import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  

  transform(allProducts: [], searchKey: string, propName: string): any[] {
    let result: any = []
    if (!allProducts || searchKey == "" || propName == "") {
      return allProducts
    }
    allProducts.forEach((products: any) => {
      if (products[propName].trim().toLowerCase().includes(searchKey.toLowerCase())) {
        result.push(products)
      }
    })
    return result;
  }
}
