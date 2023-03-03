// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'uSDINR'
// })
// export class USDINRPipe implements PipeTransform {

//   transform(value: number, ...args: number[]): unknown {
//     return value*72;
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})

export class usdInrPipe implements PipeTransform {
  transform(value: number) {
    return value * 72
  }
}