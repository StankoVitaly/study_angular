import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'dateFormat'})
export class DateFormatPipe implements PipeTransform { // default Format 22. April 2016

  public transform(dateTime, format: string) {
    if (!dateTime) {
      return '-';
    }

    return moment(dateTime).locale('ukr').format('LLL');

  }
}
