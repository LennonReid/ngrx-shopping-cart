import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstImage'
})
export class FirstImagePipe implements PipeTransform {
  transform(value: string | string[] | undefined, ...args: unknown[]): string {
    if (!value) {
      return '';
    }
    if (typeof value !== 'string' && value?.length > 0) {
      return value[0];
    }
    return value as string;
  }
}
