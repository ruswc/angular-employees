import { Pipe, PipeTransform } from '@angular/core';
import { Employees } from '../interfaces/Employees';

@Pipe({
  name: 'sortDescending',
})
export class SortDescendingPipe implements PipeTransform {
  transform(employees: Employees[], enable: boolean): Employees[] {
    return enable
      ? employees.sort((x, y) => {
          const nameX = x.name.toUpperCase();
          const nameY = y.name.toUpperCase();
          if (nameX < nameY) {
            return 1;
          }
          if (nameX > nameY) {
            return -1;
          }
          return 0;
        })
      : employees;
  }
}
