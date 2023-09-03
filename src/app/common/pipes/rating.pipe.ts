import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number {
    if (!value) {
      return 0;
    }
    return Math.round(value / 10);
  }
}
