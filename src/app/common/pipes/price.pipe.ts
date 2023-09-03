import { Pipe, PipeTransform } from '@angular/core';

const isNumber = (val: any) => typeof val === "number" && val === val;

const numberStrip = (value: number, precision = 12): number => parseFloat(value.toPrecision(precision));

@Pipe({
  name: 'price'
})
export class Price implements PipeTransform {
  transform(value?: number | null): string {
    if (!value || !isNumber(value) || Number.isNaN(value) || value < 0) {
      return '0';
    }
    return numberStrip(value / 100).toFixed(2);
  }
}
